# 📚 Plantão Aluno

Plataforma completa de estudos para alunos do 8º e 9º ano do ensino fundamental, com resumos, videoaulas e simulados de todas as matérias.

## 🎯 Funcionalidades

### Para Alunos

#### Autenticação
- ✅ Login e cadastro com email/senha
- ✅ Integração com Google OAuth (simulado)
- ✅ Escolha do ano escolar (8º ou 9º ano)

#### Tela Inicial
- ✅ Apresentação do projeto
- ✅ Listagem de funcionalidades
- ✅ Planos de assinatura:
  - **Grátis**: R$ 0,00 (acesso limitado)
  - **Básico**: R$ 22,90/mês (promoção Janeiro/25)
  - **Premium**: R$ 34,90/mês (promoção Janeiro/25)

#### Dashboard
- ✅ Estatísticas pessoais (média, melhor nota, simulados feitos)
- ✅ Informações do plano atual
- ✅ Acesso rápido às funcionalidades

#### Resumos
- ✅ Organizados por 4 bimestres
- ✅ 8 matérias disponíveis:
  - Matemática, Geografia, História, Português
  - Física, Química, Biologia, Inglês
- ✅ Sistema de desbloqueio progressivo
- ✅ Conteúdo em formato markdown

#### Simulados
- ✅ 15 questões por simulado
- ✅ Distribuição: 5 fáceis (1pt), 5 médias (2pts), 5 difíceis (3pts)
- ✅ Nota de 0 a 10
- ✅ Correção automática
- ✅ Histórico de resultados
- ✅ Limite por plano:
  - Grátis: 1 simulado/bimestre
  - Básico: 4 simulados/bimestre
  - Premium: ilimitado

#### Videoaulas
- ✅ Disponível apenas no plano Premium
- ✅ Organizadas por matéria e bimestre
- ✅ Player integrado
- ✅ Informações de duração

#### Perfil
- ✅ Informações da conta
- ✅ Desempenho acadêmico (média, melhor nota, total de simulados)
- ✅ Histórico detalhado de simulados
- ✅ Gerenciamento de assinatura
- ✅ Opção de cancelar assinatura
- ✅ Opção de excluir conta

### Para Administradores

#### Painel de Controle
- ✅ Estatísticas gerais:
  - Total de alunos
  - Assinaturas ativas
  - Nota média geral
  - Total de simulados realizados

#### Gerenciamento de Alunos
- ✅ Lista de todos os alunos cadastrados
- ✅ Alterar plano de qualquer aluno
- ✅ Visualizar informações detalhadas

#### Gerenciamento de Conteúdo
- ✅ **Adicionar Resumos**:
  - Escolher matéria e bimestre
  - Título e conteúdo
  - Suporte a markdown

- ✅ **Adicionar Videoaulas**:
  - Escolher matéria e bimestre
  - Título, URL e duração
  - Integração com YouTube

- ✅ **Criar Simulados**:
  - Adicionar 15 questões
  - Definir dificuldade (fácil, médio, difícil)
  - 4 alternativas por questão
  - Validação automática (5+5+5 questões)

- ✅ **Desbloquear Conteúdo**:
  - Desbloquear bimestres
  - Desbloquear matérias específicas

#### Visualização de Dados
- ✅ Tabela de assinaturas ativas
- ✅ Resultados de todos os simulados
- ✅ Filtros e organização

## 🚀 Como Usar

### Instalação

1. Clone ou baixe este repositório
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. Não é necessário instalar dependências ou configurar servidor

### Acesso de Demonstração

#### Conta Admin (pré-cadastrada)
- **Email**: admin@plantaoaluno.com
- **Senha**: admin123
- **Plano**: Premium
- **Acesso**: Painel completo de administração

#### Criar Nova Conta de Aluno
1. Acesse a página inicial
2. Clique em "Entrar"
3. Clique em "Cadastre-se"
4. Preencha os dados
5. Escolha seu ano escolar (8º ou 9º)

### Conteúdo Inicial

O projeto vem com conteúdo de demonstração:
- **Matemática - 1º Bimestre**:
  - Resumo completo sobre Fatoração
  - 2 videoaulas
  - 1 simulado com 15 questões

Outros bimestres e matérias podem ser desbloqueados pelo admin.

## 🎨 Tecnologias Utilizadas

- **HTML5**: Estrutura das páginas
- **CSS3**: Estilização e design responsivo
- **JavaScript (Vanilla)**: Toda a lógica da aplicação
- **LocalStorage**: Banco de dados local (persistência de dados)
- **Google Fonts**: Tipografia (Inter)

## 📁 Estrutura do Projeto

```
plantao-aluno/
├── index.html              # Página inicial (landing page)
├── css/
│   └── styles.css         # Estilos globais
├── js/
│   ├── main.js           # JavaScript da landing page
│   ├── database.js       # Sistema de banco de dados (LocalStorage)
│   ├── auth.js           # Autenticação e cadastro
│   ├── dashboard.js      # Dashboard do aluno
│   ├── resumos.js        # Área de resumos e simulados
│   ├── videoaulas.js     # Área de videoaulas
│   ├── perfil.js         # Perfil do aluno
│   └── admin.js          # Painel administrativo
├── pages/
│   ├── login.html        # Tela de login/cadastro
│   ├── dashboard.html    # Dashboard do aluno
│   ├── resumos.html      # Resumos e simulados
│   ├── videoaulas.html   # Videoaulas
│   ├── perfil.html       # Perfil do usuário
│   └── admin.html        # Painel admin
├── data/                 # (Vazio - dados em LocalStorage)
└── images/               # (Vazio - para futuras imagens)
```

## 💾 Banco de Dados

Os dados são armazenados no **LocalStorage** do navegador em 3 chaves:

1. **plantaoaluno_users**: Usuários cadastrados
2. **plantaoaluno_content**: Conteúdo (resumos, videoaulas, simulados)
3. **plantaoaluno_results**: Resultados dos simulados

### Limpeza de Dados

Para resetar o banco de dados, execute no console do navegador:
```javascript
localStorage.clear();
location.reload();
```

## 🎓 Planos e Recursos

| Recurso | Grátis | Básico | Premium |
|---------|--------|--------|---------|
| Preço | R$ 0,00 | R$ 22,90/mês | R$ 34,90/mês |
| Resumos | Limitado | Todos | Todos |
| Simulados | 1/bimestre | 4/bimestre | Ilimitado |
| Videoaulas | ❌ | ❌ | ✅ |
| Suporte | Básico | Personalizado | Prioritário |

## 🔐 Segurança

**IMPORTANTE**: Este é um projeto de demonstração educacional.

⚠️ **NÃO USE EM PRODUÇÃO sem implementar**:
- Autenticação real com JWT ou sessões
- Criptografia de senhas (bcrypt)
- Banco de dados real (PostgreSQL, MongoDB, etc.)
- Validação de dados no backend
- Proteção contra SQL Injection e XSS
- HTTPS
- Sistema de pagamento real

## 📱 Responsividade

O site é responsivo e funciona em:
- 💻 Desktop
- 📱 Tablets
- 📱 Smartphones

## 🎯 Próximas Melhorias

- [ ] Sistema de notificações
- [ ] Chat de suporte
- [ ] Fórum de discussão
- [ ] Gamificação (badges, rankings)
- [ ] Modo escuro
- [ ] PWA (Progressive Web App)
- [ ] Sistema de recompensas
- [ ] Integração com pagamento real

## 📝 Licença

Este é um projeto educacional para demonstração.

## 👨‍💻 Desenvolvedor

Criado para o **Plantão Aluno** - Plataforma de Estudos

---

**Status**: ✅ Projeto Completo e Funcional

Para dúvidas ou suporte, entre em contato através do email: contato@plantaoaluno.com.br
