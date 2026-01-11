# Guia de Hospedagem - Plantão Aluno

## ⚠️ Importante sobre Supabase

**Supabase NÃO hospeda sites estáticos!** O Supabase é uma plataforma de backend/database (alternativa ao Firebase). Para hospedar este site estático com PWA, você precisa de um serviço de hospedagem web.

## 🌟 Opções Recomendadas (GRÁTIS)

### Opção 1: Vercel (RECOMENDADO) ⭐

**Por que Vercel?**
- ✅ GRÁTIS e ilimitado para projetos pessoais
- ✅ HTTPS automático
- ✅ Deploy automático via GitHub
- ✅ Suporte PWA perfeito
- ✅ CDN global (site super rápido)
- ✅ Domínio grátis (.vercel.app)

**Como fazer:**

1. **Criar conta no Vercel**
   - Acesse: https://vercel.com
   - Clique em "Sign Up"
   - Use sua conta GitHub para login

2. **Fazer push do código para GitHub**
   ```bash
   # Se ainda não tem repositório, crie um no GitHub primeiro
   # Depois execute:
   cd /Users/pedrogentile/Documents/Cloude\ Code/plantao-aluno
   git push origin main
   ```

3. **Importar projeto no Vercel**
   - No dashboard do Vercel, clique em "Add New Project"
   - Conecte sua conta GitHub
   - Selecione o repositório "plantao-aluno"
   - Clique em "Deploy"

4. **Configurar (se necessário)**
   - Framework Preset: Other
   - Root Directory: ./
   - Build Command: (deixe vazio)
   - Output Directory: ./

5. **Pronto!** 🎉
   - Seu site estará em: `https://seu-projeto.vercel.app`
   - Todo push para main fará deploy automático

---

### Opção 2: Netlify

**Características:**
- ✅ GRÁTIS
- ✅ HTTPS automático
- ✅ Deploy via GitHub
- ✅ Suporte PWA
- ✅ Domínio grátis (.netlify.app)

**Como fazer:**

1. **Criar conta no Netlify**
   - Acesse: https://netlify.com
   - Sign up com GitHub

2. **Deploy do site**
   - Clique em "Add new site"
   - Escolha "Import an existing project"
   - Conecte GitHub e selecione o repositório
   - Configure:
     - Build command: (vazio)
     - Publish directory: .
   - Clique em "Deploy"

3. **Pronto!**
   - Site em: `https://seu-site.netlify.app`

---

### Opção 3: GitHub Pages

**Características:**
- ✅ GRÁTIS
- ✅ HTTPS automático
- ✅ Direto do repositório GitHub
- ⚠️ Limitação: 100GB bandwidth/mês

**Como fazer:**

1. **Fazer push para GitHub**
   ```bash
   cd /Users/pedrogentile/Documents/Cloude\ Code/plantao-aluno
   git push origin main
   ```

2. **Habilitar GitHub Pages**
   - Vá para Settings do repositório no GitHub
   - Na seção "Pages"
   - Em "Source", selecione "main" branch
   - Clique em "Save"

3. **Aguardar deploy**
   - Em alguns minutos, o site estará disponível em:
   - `https://seu-usuario.github.io/plantao-aluno`

---

## 📱 Se Quiser Usar Supabase (Backend)

Você PODE usar Supabase junto com a hospedagem, mas apenas para:
- Banco de dados (substituir LocalStorage)
- Autenticação de usuários
- Storage de arquivos (imagens, etc)

**Arquitetura recomendada:**
- **Frontend (site)**: Vercel/Netlify
- **Backend (dados)**: Supabase

### Como integrar Supabase

Se quiser migrar do LocalStorage para Supabase:

1. **Criar projeto no Supabase**
   - Acesse: https://supabase.com
   - Crie conta e novo projeto

2. **Criar tabelas**
   ```sql
   -- Tabela de usuários
   CREATE TABLE users (
     id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
     email TEXT UNIQUE NOT NULL,
     name TEXT NOT NULL,
     school_year TEXT,
     plan TEXT DEFAULT 'gratis',
     is_admin BOOLEAN DEFAULT false,
     created_at TIMESTAMP DEFAULT NOW()
   );

   -- Tabela de resultados
   CREATE TABLE results (
     id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
     user_id uuid REFERENCES users(id),
     modulo_id INTEGER,
     materia TEXT,
     bimestre INTEGER,
     nota DECIMAL,
     acertos INTEGER,
     total_questoes INTEGER,
     pontuacao INTEGER,
     date TIMESTAMP DEFAULT NOW()
   );
   ```

3. **Instalar SDK do Supabase**
   ```bash
   npm install @supabase/supabase-js
   ```

4. **Configurar no código**
   ```javascript
   // Criar arquivo js/supabase-config.js
   import { createClient } from '@supabase/supabase-js'

   const supabaseUrl = 'SUA_URL_AQUI'
   const supabaseKey = 'SUA_CHAVE_AQUI'
   const supabase = createClient(supabaseUrl, supabaseKey)
   ```

**Mas isso é opcional!** O site funciona perfeitamente com LocalStorage.

---

## 🚀 Deploy Rápido (Passo a Passo Completo)

### MÉTODO MAIS FÁCIL: Vercel CLI

1. **Instalar Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Fazer login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd /Users/pedrogentile/Documents/Cloude\ Code/plantao-aluno
   vercel
   ```

4. **Responder as perguntas:**
   - Set up and deploy? **Y**
   - Which scope? (escolha sua conta)
   - Link to existing project? **N**
   - Project name? **plantao-aluno**
   - In which directory is your code located? **./**

5. **Pronto!** O site estará online em segundos! 🎉

---

## 📋 Checklist Pré-Deploy

Antes de fazer deploy, garanta que:

- [ ] Código está commitado no Git
- [ ] Criou os ícones PWA (veja PWA-SETUP.md)
- [ ] Adicionou logo.png em assets/images/
- [ ] Testou localmente e tudo está funcionando
- [ ] Fez push para GitHub (se usar Vercel/Netlify via GitHub)

---

## 🔧 Após o Deploy

1. **Testar PWA no celular**
   - Acesse o site pelo Chrome Android
   - Veja se aparece "Adicionar à tela inicial"

2. **Verificar HTTPS**
   - Abra DevTools → Security
   - Deve mostrar "Secure connection"

3. **Testar Service Worker**
   - DevTools → Application → Service Workers
   - Deve mostrar "activated and running"

4. **Teste offline**
   - Com o site aberto, desligue a internet
   - Site deve continuar funcionando

---

## 🆘 Problemas Comuns

### PWA não funciona
- ✅ Certifique-se que está em HTTPS
- ✅ Verifique se os ícones existem
- ✅ Limpe o cache do navegador

### Service Worker não registra
- ✅ Verifique se o caminho do sw.js está correto
- ✅ HTTPS é obrigatório
- ✅ Veja erros no console

### Site não atualiza após deploy
- ✅ Limpe cache do navegador (Ctrl+Shift+R)
- ✅ Atualize versão do cache no sw.js
- ✅ Desregistre o Service Worker antigo

---

## 💰 Custos

**TODOS os serviços recomendados são 100% GRATUITOS!**

- Vercel: Grátis ilimitado para projetos pessoais
- Netlify: Grátis até 100GB/mês
- GitHub Pages: Grátis até 100GB/mês
- Supabase: Grátis até 500MB database + 1GB storage

---

## 🎯 Resumo: O que fazer AGORA

1. **Escolha Vercel** (mais fácil e rápido)
2. **Crie conta em https://vercel.com**
3. **Faça push do código para GitHub**
4. **Conecte GitHub com Vercel**
5. **Clique em Deploy**
6. **Pronto! Site online em 2 minutos** 🚀

Qualquer dúvida, me chame! 😊
