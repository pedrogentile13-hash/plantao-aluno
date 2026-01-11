# Guia Completo: Integração com Supabase

Este guia mostra como migrar do LocalStorage para Supabase Database.

## 📋 O que vamos fazer

- Criar projeto no Supabase
- Criar tabelas no banco de dados
- Integrar Supabase no código
- Migrar funções do LocalStorage para Supabase
- Manter compatibilidade

---

## 🚀 Passo 1: Criar Conta e Projeto no Supabase

1. **Acessar Supabase**
   - Vá para: https://supabase.com
   - Clique em "Start your project"
   - Faça login com GitHub

2. **Criar novo projeto**
   - Clique em "New Project"
   - Preencha:
     - **Name**: `plantao-aluno`
     - **Database Password**: Crie uma senha forte (ANOTE!)
     - **Region**: Brazil (São Paulo) ou South America
     - **Pricing Plan**: Free
   - Clique em "Create new project"
   - Aguarde 2-3 minutos até o projeto ficar pronto

3. **Anotar credenciais**
   - Vá em Settings → API
   - Anote:
     - **Project URL**: `https://xxxxxxxxxxxx.supabase.co`
     - **anon/public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

---

## 🗄️ Passo 2: Criar Estrutura do Banco de Dados

1. **Abrir SQL Editor**
   - No painel do Supabase, vá em "SQL Editor"
   - Clique em "New query"

2. **Executar este SQL** (copie e cole tudo):

```sql
-- ============================================
-- TABELA DE USUÁRIOS
-- ============================================
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT NOT NULL,
  school_year TEXT DEFAULT '9',
  plan TEXT DEFAULT 'gratis' CHECK (plan IN ('gratis', 'basico', 'premium')),
  is_admin BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para melhor performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_plan ON users(plan);

-- ============================================
-- TABELA DE MÓDULOS (CONTEÚDO)
-- ============================================
CREATE TABLE modulos (
  id SERIAL PRIMARY KEY,
  materia TEXT NOT NULL,
  bimestre INTEGER NOT NULL CHECK (bimestre BETWEEN 1 AND 4),
  school_year TEXT CHECK (school_year IN ('8', '9')),
  titulo TEXT NOT NULL,
  descricao TEXT,
  resumo TEXT,
  simulado JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices
CREATE INDEX idx_modulos_materia ON modulos(materia);
CREATE INDEX idx_modulos_bimestre ON modulos(bimestre);
CREATE INDEX idx_modulos_school_year ON modulos(school_year);

-- ============================================
-- TABELA DE RESULTADOS DE SIMULADOS
-- ============================================
CREATE TABLE results (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  modulo_id INTEGER REFERENCES modulos(id),
  materia TEXT NOT NULL,
  bimestre INTEGER NOT NULL,
  nota DECIMAL(4,1) NOT NULL,
  acertos INTEGER NOT NULL,
  total_questoes INTEGER NOT NULL,
  pontuacao INTEGER NOT NULL,
  date TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices
CREATE INDEX idx_results_user_id ON results(user_id);
CREATE INDEX idx_results_modulo_id ON results(modulo_id);
CREATE INDEX idx_results_date ON results(date);

-- ============================================
-- TABELA DE VIDEOAULAS
-- ============================================
CREATE TABLE videoaulas (
  id SERIAL PRIMARY KEY,
  materia TEXT NOT NULL,
  bimestre INTEGER NOT NULL CHECK (bimestre BETWEEN 1 AND 4),
  school_year TEXT CHECK (school_year IN ('8', '9')),
  titulo TEXT NOT NULL,
  url TEXT NOT NULL,
  duracao TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- TABELA DE CONTEÚDO DESBLOQUEADO
-- ============================================
CREATE TABLE unlocked_content (
  id SERIAL PRIMARY KEY,
  unlocked_bimestres INTEGER[] DEFAULT ARRAY[1],
  unlocked_materias JSONB DEFAULT '{"1": [], "2": [], "3": [], "4": []}'::jsonb,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Inserir registro padrão
INSERT INTO unlocked_content (unlocked_bimestres, unlocked_materias)
VALUES (
  ARRAY[1, 2, 3, 4],
  '{"1": ["matematica", "geografia", "historia", "portugues", "fisica", "quimica", "biologia", "ingles"],
    "2": ["matematica", "geografia", "historia", "portugues", "fisica", "quimica", "biologia", "ingles"],
    "3": ["matematica", "geografia", "historia", "portugues", "fisica", "quimica", "biologia", "ingles"],
    "4": ["matematica", "geografia", "historia", "portugues", "fisica", "quimica", "biologia", "ingles"]}'::jsonb
);

-- ============================================
-- FUNÇÕES E TRIGGERS
-- ============================================

-- Trigger para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Habilitar RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE results ENABLE ROW LEVEL SECURITY;

-- Políticas para users
CREATE POLICY "Users can view their own data" ON users
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own data" ON users
    FOR UPDATE USING (auth.uid() = id);

-- Políticas para results
CREATE POLICY "Users can view their own results" ON results
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own results" ON results
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Módulos e videoaulas são públicos (leitura)
ALTER TABLE modulos ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read modulos" ON modulos
    FOR SELECT USING (true);

ALTER TABLE videoaulas ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read videoaulas" ON videoaulas
    FOR SELECT USING (true);

-- ============================================
-- FUNÇÕES CUSTOMIZADAS
-- ============================================

-- Função para registrar usuário
CREATE OR REPLACE FUNCTION register_user(
  p_email TEXT,
  p_password TEXT,
  p_name TEXT,
  p_school_year TEXT
)
RETURNS JSON AS $$
DECLARE
  v_user_id UUID;
  v_password_hash TEXT;
BEGIN
  -- Hash da senha (simplificado - em produção use bcrypt)
  v_password_hash := encode(digest(p_password, 'sha256'), 'hex');

  -- Inserir usuário
  INSERT INTO users (email, password_hash, name, school_year)
  VALUES (p_email, v_password_hash, p_name, p_school_year)
  RETURNING id INTO v_user_id;

  -- Retornar dados do usuário
  RETURN (
    SELECT row_to_json(u.*)
    FROM users u
    WHERE u.id = v_user_id
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Função para login
CREATE OR REPLACE FUNCTION login_user(
  p_email TEXT,
  p_password TEXT
)
RETURNS JSON AS $$
DECLARE
  v_password_hash TEXT;
  v_user JSON;
BEGIN
  v_password_hash := encode(digest(p_password, 'sha256'), 'hex');

  SELECT row_to_json(u.*)
  INTO v_user
  FROM users u
  WHERE u.email = p_email
  AND u.password_hash = v_password_hash;

  IF v_user IS NULL THEN
    RAISE EXCEPTION 'Credenciais inválidas';
  END IF;

  RETURN v_user;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

3. **Executar o SQL**
   - Clique em "Run" no canto inferior direito
   - Aguarde a mensagem "Success. No rows returned"

---

## 📦 Passo 3: Importar Dados Existentes

Agora vamos popular o banco com os módulos e videoaulas que já estão no código:

```sql
-- INSERIR MÓDULOS
-- (Copie os módulos do seu database.js e adapte para este formato)

INSERT INTO modulos (id, materia, bimestre, school_year, titulo, descricao, resumo, simulado) VALUES
(1, 'matematica', 1, '9', 'FATORAÇÃO', 'Tipos de Fatoração e Exemplos', '# Fatoração...', '{"questoes": [...]}'),
(2, 'matematica', 1, '9', 'EXPRESSÃO DE 2o GRAU', 'Aprenda a expressão.', '# Equação de Segundo Grau...', '{"questoes": [...]}'),
(3, 'matematica', 1, '8', 'FORMAS 3D', 'Aprenda as formas espaciais', '# Formas 3D...', '{"questoes": [...]}');
-- ... adicione todos os outros módulos

-- INSERIR VIDEOAULAS
INSERT INTO videoaulas (id, materia, bimestre, titulo, url, duracao) VALUES
(1, 'matematica', 1, 'Introdução à Fatoração', 'https://www.youtube.com/embed/dQw4w9WgXcQ', '15:30'),
(2, 'matematica', 1, 'Fatoração - Exercícios Resolvidos', 'https://www.youtube.com/embed/dQw4w9WgXcQ', '22:45');
```

---

## 🔧 Passo 4: Instalar SDK do Supabase

1. **Baixar a biblioteca**
   - Vá para: https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2
   - Copie o código ou use via CDN

2. **Adicionar no HTML** (antes dos outros scripts):

```html
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
```

---

## 💻 Passo 5: Criar arquivo de configuração

Crie o arquivo `js/supabase-client.js`:

```javascript
// Configuração do Supabase
const SUPABASE_URL = 'https://SEU-PROJETO.supabase.co'; // SUBSTITUA!
const SUPABASE_KEY = 'SUA-CHAVE-ANON-AQUI'; // SUBSTITUA!

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Exportar para uso global
window.supabaseClient = supabase;
```

⚠️ **IMPORTANTE**: Substitua `SUPABASE_URL` e `SUPABASE_KEY` pelas suas credenciais reais!

---

## 🔄 Passo 6: Migrar database.js para Supabase

Crie um novo arquivo `js/database-supabase.js` que substitui o `database.js`:

```javascript
const DB_SUPABASE = {
    // ============================================
    // AUTENTICAÇÃO
    // ============================================

    async register(email, password, name, schoolYear) {
        try {
            const { data, error } = await supabaseClient
                .rpc('register_user', {
                    p_email: email,
                    p_password: password,
                    p_name: name,
                    p_school_year: schoolYear
                });

            if (error) throw error;

            // Salvar no localStorage para sessão
            localStorage.setItem('plantaoaluno_currentUser', JSON.stringify(data));
            return data;
        } catch (error) {
            console.error('Erro no registro:', error);
            throw error;
        }
    },

    async login(email, password) {
        try {
            const { data, error } = await supabaseClient
                .rpc('login_user', {
                    p_email: email,
                    p_password: password
                });

            if (error) throw error;

            // Salvar no localStorage para sessão
            localStorage.setItem('plantaoaluno_currentUser', JSON.stringify(data));
            return data;
        } catch (error) {
            console.error('Erro no login:', error);
            throw error;
        }
    },

    logout() {
        localStorage.removeItem('plantaoaluno_currentUser');
        window.location.href = '../pages/login.html';
    },

    getCurrentUser() {
        const user = localStorage.getItem('plantaoaluno_currentUser');
        return user ? JSON.parse(user) : null;
    },

    async updateUser(userData) {
        try {
            const { data, error } = await supabaseClient
                .from('users')
                .update({
                    name: userData.name,
                    school_year: userData.schoolYear,
                    plan: userData.plan
                })
                .eq('id', userData.id)
                .select()
                .single();

            if (error) throw error;

            // Atualizar localStorage
            localStorage.setItem('plantaoaluno_currentUser', JSON.stringify(data));
            return data;
        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
            throw error;
        }
    },

    // ============================================
    // MÓDULOS
    // ============================================

    async getModulos(materia, bimestre) {
        try {
            const currentUser = this.getCurrentUser();

            const { data, error } = await supabaseClient
                .from('modulos')
                .select('*')
                .eq('materia', materia)
                .eq('bimestre', bimestre)
                .or(`school_year.is.null,school_year.eq.${currentUser.school_year}`);

            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Erro ao buscar módulos:', error);
            return [];
        }
    },

    async getAllModulos() {
        try {
            const { data, error } = await supabaseClient
                .from('modulos')
                .select('*');

            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Erro ao buscar todos módulos:', error);
            return [];
        }
    },

    // ============================================
    // VIDEOAULAS
    // ============================================

    async getVideoaulas(materia, bimestre) {
        try {
            const currentUser = this.getCurrentUser();

            const { data, error } = await supabaseClient
                .from('videoaulas')
                .select('*')
                .eq('materia', materia)
                .eq('bimestre', bimestre)
                .or(`school_year.is.null,school_year.eq.${currentUser.school_year}`);

            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Erro ao buscar videoaulas:', error);
            return [];
        }
    },

    // ============================================
    // RESULTADOS
    // ============================================

    async saveResult(result) {
        try {
            const currentUser = this.getCurrentUser();

            const { data, error } = await supabaseClient
                .from('results')
                .insert({
                    user_id: currentUser.id,
                    modulo_id: result.moduloId,
                    materia: result.materia,
                    bimestre: result.bimestre,
                    nota: result.nota,
                    acertos: result.acertos,
                    total_questoes: result.totalQuestoes,
                    pontuacao: result.pontuacao
                })
                .select()
                .single();

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Erro ao salvar resultado:', error);
            throw error;
        }
    },

    async getUserResults(userId) {
        try {
            const { data, error } = await supabaseClient
                .from('results')
                .select('*')
                .eq('user_id', userId)
                .order('date', { ascending: false });

            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Erro ao buscar resultados:', error);
            return [];
        }
    },

    // ============================================
    // CONTEÚDO DESBLOQUEADO
    // ============================================

    async getContent() {
        try {
            const { data, error } = await supabaseClient
                .from('unlocked_content')
                .select('*')
                .single();

            if (error) throw error;

            return {
                unlockedBimestres: data.unlocked_bimestres,
                unlockedMaterias: data.unlocked_materias
            };
        } catch (error) {
            console.error('Erro ao buscar conteúdo:', error);
            return {
                unlockedBimestres: [1],
                unlockedMaterias: { 1: [] }
            };
        }
    }
};

// Substituir DB global
window.DB = DB_SUPABASE;
```

---

## 📝 Passo 7: Atualizar HTML

Em **TODOS** os arquivos HTML, adicione antes dos outros scripts:

```html
<!-- Supabase -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script src="js/supabase-client.js"></script>
<script src="js/database-supabase.js"></script>

<!-- Remova ou comente a linha antiga -->
<!-- <script src="js/database.js"></script> -->
```

---

## ✅ Passo 8: Testar

1. **Limpar LocalStorage**
   - Abra DevTools → Application → Local Storage
   - Clique com botão direito → Clear

2. **Criar novo usuário**
   - Vá para página de cadastro
   - Registre um novo usuário
   - Verifique no Supabase se foi criado

3. **Fazer login**
   - Faça login com o usuário criado

4. **Testar funcionalidades**
   - Acessar resumos
   - Fazer simulado
   - Verificar resultados

---

## 🔒 Segurança

**NUNCA faça:**
- ❌ Commitar credenciais no Git
- ❌ Expor a chave `service_role` (use apenas `anon`)
- ❌ Desabilitar RLS em produção

**Sempre faça:**
- ✅ Use variáveis de ambiente
- ✅ Mantenha RLS ativado
- ✅ Valide dados no backend

---

## 🚀 Deploy

Depois de tudo funcionando localmente:

1. **Criar arquivo .env.local**
   ```
   SUPABASE_URL=https://seu-projeto.supabase.co
   SUPABASE_KEY=sua-chave-anon
   ```

2. **Adicionar ao .gitignore**
   ```
   .env.local
   .env
   ```

3. **Fazer deploy no Vercel**
   - Configure as variáveis de ambiente no Vercel
   - Deploy normalmente

---

## 📊 Monitoramento

No painel do Supabase você pode:
- Ver todas as tabelas e dados
- Executar queries SQL
- Ver logs de API
- Monitorar uso do banco

---

## 🆘 Troubleshooting

**Erro: "Failed to fetch"**
- Verifique se as credenciais estão corretas
- Confirme que o projeto Supabase está ativo

**Erro: "Row Level Security"**
- Verifique se as políticas RLS estão configuradas
- Use `supabaseClient.auth.signIn()` para autenticação real

**Dados não aparecem**
- Verifique se populou as tabelas com SQL
- Confira os índices e relações

---

## 💡 Próximos Passos

Depois que tudo estiver funcionando:

1. Implementar autenticação real do Supabase (OAuth, Magic Link)
2. Adicionar realtime para notificações
3. Implementar storage para upload de arquivos
4. Criar painel admin para gerenciar conteúdo

Pronto! Agora seu site usa Supabase como backend! 🎉
