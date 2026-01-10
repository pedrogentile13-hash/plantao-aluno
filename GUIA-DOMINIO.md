# 🌐 Guia: Como Adicionar seu Domínio ao Plantão Aluno

Este guia mostra como colocar o Plantão Aluno online com seu próprio domínio.

## Opção 1: GitHub Pages (GRÁTIS - Recomendado)

### Passo 1: Criar Repositório no GitHub

1. Acesse https://github.com e faça login (ou crie uma conta)
2. Clique no botão "New" (novo repositório)
3. Nome do repositório: `plantao-aluno`
4. Deixe como **Público**
5. **NÃO** marque nenhuma opção (README, .gitignore, etc)
6. Clique em "Create repository"

### Passo 2: Enviar o Código para o GitHub

No terminal, execute estes comandos na pasta do projeto:

```bash
# Adicionar o repositório remoto (SUBSTITUA seu-usuario pelo seu nome de usuário do GitHub)
git remote add origin https://github.com/seu-usuario/plantao-aluno.git

# Enviar o código
git branch -M main
git push -u origin main
```

### Passo 3: Ativar GitHub Pages

1. No seu repositório no GitHub, vá em **Settings** (Configurações)
2. No menu lateral, clique em **Pages**
3. Em "Source", selecione **main** e pasta **/ (root)**
4. Clique em **Save**
5. Aguarde 1-2 minutos

Seu site estará disponível em: `https://seu-usuario.github.io/plantao-aluno/`

### Passo 4: Adicionar Domínio Personalizado

#### 4.1 Se você JÁ tem um domínio (ex: plantaoaluno.com.br):

**No seu provedor de domínio** (Registro.br, GoDaddy, Hostgator, etc):

1. Acesse o painel DNS do seu domínio
2. Adicione os seguintes registros:

```
Tipo: A
Nome: @
Valor: 185.199.108.153

Tipo: A
Nome: @
Valor: 185.199.109.153

Tipo: A
Nome: @
Valor: 185.199.110.153

Tipo: A
Nome: @
Valor: 185.199.111.153

Tipo: CNAME
Nome: www
Valor: seu-usuario.github.io
```

**No GitHub Pages:**

1. Em Settings → Pages
2. Em "Custom domain", digite seu domínio: `plantaoaluno.com.br`
3. Clique em **Save**
4. Aguarde a verificação (pode levar até 24 horas)
5. Marque a opção **Enforce HTTPS**

#### 4.2 Se você NÃO tem um domínio ainda:

**Opções para registrar domínio:**
- **Registro.br** (domínios .br) - R$ 40/ano
- **GoDaddy** - apartir de R$ 15/ano (.com)
- **Hostinger** - apartir de R$ 19/ano
- **Namecheap** - apartir de $8.88/ano

Após comprar, siga as instruções da seção 4.1.

---

## Opção 2: Netlify (GRÁTIS - Muito Fácil)

### Vantagens:
- Deploy automático
- HTTPS grátis
- Domínio personalizado grátis
- Mais rápido que GitHub Pages

### Passos:

1. Acesse https://netlify.com e crie uma conta
2. Clique em "Add new site" → "Import an existing project"
3. Escolha "GitHub" e autorize o Netlify
4. Selecione o repositório `plantao-aluno`
5. Configurações de build (DEIXE TUDO VAZIO):
   - Build command: (vazio)
   - Publish directory: (vazio)
6. Clique em "Deploy"

Seu site estará em: `https://nome-aleatorio.netlify.app`

### Adicionar Domínio no Netlify:

1. No painel do seu site, vá em **Domain settings**
2. Clique em **Add custom domain**
3. Digite seu domínio e siga as instruções
4. Configure os DNS no seu provedor conforme mostrado

---

## Opção 3: Vercel (GRÁTIS)

Similar ao Netlify:

1. Acesse https://vercel.com
2. Crie conta com GitHub
3. Importe o repositório `plantao-aluno`
4. Deploy automático
5. Adicione domínio personalizado nas configurações

---

## Opção 4: Hospedagem Tradicional (PAGO)

Se você já tem hospedagem (Hostgator, Locaweb, etc):

1. Acesse o cPanel da sua hospedagem
2. Vá em "Gerenciador de Arquivos"
3. Entre na pasta `public_html`
4. Faça upload de TODOS os arquivos do projeto
5. Acesse seu domínio

**Importante:** Como o site usa LocalStorage, não precisa de PHP, MySQL ou backend.

---

## ⚠️ IMPORTANTE: Ajuste para Subpastas

Se seu site ficar em `https://dominio.com.br/plantao-aluno/` ao invés de `https://dominio.com.br/`:

### Corrigir caminhos no index.html:

```html
<!-- ANTES -->
<a href="pages/login.html">

<!-- DEPOIS -->
<a href="./pages/login.html">
```

### Corrigir caminhos nas páginas internas:

```html
<!-- ANTES -->
<link rel="stylesheet" href="../css/styles.css">
<script src="../js/database.js"></script>

<!-- DEPOIS -->
<link rel="stylesheet" href="./css/styles.css">
<script src="./js/database.js"></script>
```

---

## 🚀 Recomendação Final

**Para iniciantes:** Use **Netlify** ou **Vercel**
- Deploy em 2 minutos
- HTTPS automático
- Domínio grátis (.netlify.app ou .vercel.app)
- Pode adicionar domínio próprio depois

**Para economizar:** Use **GitHub Pages**
- Totalmente grátis
- Confiável
- Boa para projetos pessoais

**Para controle total:** Hospedagem tradicional
- Você controla tudo
- Mais caro (R$ 10-30/mês)
- Mais trabalho para configurar

---

## 📞 Precisa de Ajuda?

Se tiver dúvidas em algum passo, me avise que eu ajudo!
