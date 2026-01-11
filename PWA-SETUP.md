# Configuração PWA - Plantão Aluno

## Ícones Necessários

Para que o PWA funcione corretamente, você precisa criar os seguintes ícones na pasta `assets/images/`:

### Lista de Ícones:

1. **icon-72x72.png** - 72x72 pixels
2. **icon-96x96.png** - 96x96 pixels
3. **icon-128x128.png** - 128x128 pixels
4. **icon-144x144.png** - 144x144 pixels
5. **icon-152x152.png** - 152x152 pixels
6. **icon-192x192.png** - 192x192 pixels
7. **icon-384x384.png** - 384x384 pixels
8. **icon-512x512.png** - 512x512 pixels

## Como Criar os Ícones

### Opção 1: Usar uma ferramenta online

1. Acesse: https://www.pwabuilder.com/imageGenerator
2. Faça upload do seu logo (recomendado: imagem quadrada 512x512 ou maior)
3. Clique em "Generate"
4. Baixe o arquivo ZIP com todos os ícones
5. Extraia os arquivos para `assets/images/`

### Opção 2: Usar Photoshop/GIMP/Figma

1. Crie um documento 512x512 pixels
2. Adicione seu logo centralizado
3. Exporte em cada tamanho listado acima
4. Salve os arquivos na pasta `assets/images/`

### Opção 3: Usar ImageMagick (linha de comando)

```bash
# Instale o ImageMagick primeiro
# No macOS: brew install imagemagick

# Assumindo que você tem um logo.png 512x512
cd assets/images/

convert logo.png -resize 72x72 icon-72x72.png
convert logo.png -resize 96x96 icon-96x96.png
convert logo.png -resize 128x128 icon-128x128.png
convert logo.png -resize 144x144 icon-144x144.png
convert logo.png -resize 152x152 icon-152x152.png
convert logo.png -resize 192x192 icon-192x192.png
convert logo.png -resize 384x384 icon-384x384.png
convert logo.png -resize 512x512 icon-512x512.png
```

## Características do PWA Implementadas

### ✅ Funcionalidades Implementadas:

1. **Manifest.json** - Configuração do aplicativo
   - Nome e descrição
   - Ícones em múltiplos tamanhos
   - Tema e cores
   - Atalhos rápidos para principais páginas

2. **Service Worker (sw.js)** - Funcionalidade offline
   - Cache de arquivos estáticos
   - Estratégia Network First com fallback para cache
   - Sincronização em background
   - Suporte para notificações push

3. **Meta Tags PWA** - Otimização mobile
   - Theme color
   - Apple mobile web app capable
   - Viewport configuration

4. **Instalação**
   - O navegador oferecerá automaticamente a opção "Adicionar à Tela Inicial"
   - No Android Chrome: banner de instalação automático
   - No iOS Safari: menu compartilhar → Adicionar à Tela Inicial

## Testando o PWA

### No Desktop (Chrome)

1. Abra o site em `localhost` ou em HTTPS
2. Abra DevTools (F12)
3. Vá para a aba "Application"
4. Verifique:
   - Manifest (deve estar sem erros)
   - Service Workers (deve aparecer como "activated")
   - Cache Storage (deve mostrar os arquivos cacheados)

### No Android

1. Hospede o site em HTTPS (obrigatório para PWA)
2. Acesse pelo Chrome Android
3. Um banner "Adicionar à tela inicial" deve aparecer
4. Ou vá em Menu → Adicionar à tela inicial
5. O app aparecerá como um aplicativo nativo

### No iOS

1. Abra o site no Safari
2. Toque no botão de compartilhar
3. Selecione "Adicionar à Tela de Início"
4. O ícone aparecerá na home screen

## Melhorias Futuras Sugeridas

- [ ] Implementar sincronização offline de dados do LocalStorage
- [ ] Adicionar notificações push para lembretes de estudo
- [ ] Implementar update prompt quando houver nova versão
- [ ] Adicionar splash screens personalizadas
- [ ] Otimizar cache strategy por tipo de conteúdo
- [ ] Implementar Background Sync para salvar progresso offline

## Requisitos para Produção

Para o PWA funcionar em produção, você precisa:

1. **HTTPS obrigatório** - O site DEVE estar em HTTPS (não funciona em HTTP)
2. **Service Worker registrado** - Já implementado
3. **Manifest válido** - Já implementado
4. **Ícones criados** - Você precisa criar (veja instruções acima)

## Dicas de Hospedagem PWA

Serviços gratuitos que suportam PWA:

- **Vercel** - https://vercel.com (recomendado)
- **Netlify** - https://netlify.com
- **GitHub Pages** - https://pages.github.com
- **Firebase Hosting** - https://firebase.google.com/hosting

Todos fornecem HTTPS automaticamente.
