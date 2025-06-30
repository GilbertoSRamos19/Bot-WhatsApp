<h1 align="center">🤖 Bot WhatsApp de Boas-Vindas</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-v20+-green?logo=node.js" alt="Node.js Version" />
  <img src="https://img.shields.io/badge/Status-Online-success" alt="Status" />
  <img src="https://img.shields.io/badge/Deploy-Railway-purple?logo=railway" alt="Railway" />
</p>

<p align="center">
  <img src="https://media.giphy.com/media/1MTLxzwvOnvmE/giphy.gif" alt="WhatsApp Bot" width="500" />
</p>

---

## ✨ Sobre o Projeto

Bot de WhatsApp criado com [Baileys](https://github.com/WhiskeySockets/Baileys), que envia automaticamente mensagens de **boas-vindas personalizadas** para novos participantes em grupos do WhatsApp. O bot roda 24/7 via deploy na plataforma Railway.

---

## 🚀 Funcionalidades

- 📥 Mensagem automática ao novo membro
- 👤 Usa o nome da pessoa na saudação
- ♾️ Sessão persistente com reconexão automática
- ☁️ Hospedado na nuvem via Railway
- 💬 Fácil de modificar ou expandir com novos comandos

---

## 🧠 Tecnologias usadas

- Node.js (v20+)
- Baileys (`@whiskeysockets/baileys`)
- Railway (Deploy 24/7)
- qrcode-terminal (para login inicial via terminal)

---

## ⚙️ Como instalar localmente

```bash
git clone https://github.com/GilbertoSRamos19/Bot-WhatsApp.git
cd Bot-WhatsApp
npm install
node index.js

📱 Escaneie o QR code com o seu WhatsApp para autenticar a sessão.

☁️ Deploy na Railway
Suba seu projeto no GitHub

Vá até railway.app

Crie um novo projeto e conecte com seu repositório

Garanta que a pasta auth/ esteja versionada (⚠️ remove do .gitignore se necessário)

O bot ficará online automaticamente após o deploy

📁 Estrutura do Projeto

📦 bot-whatsapp/
 ┣ 📁 auth/              # Sessão do WhatsApp
 ┣ 📄 index.js           # Código principal do bot
 ┣ 📄 package.json       # Configuração e dependências
 ┣ 📄 Procfile           # Script de inicialização Railway
 ┗ 📄 README.md          # Este arquivo :)

✏️ Personalização
Você pode editar o arquivo index.js para:

Alterar a mensagem de boas-vindas

Criar comandos como !ajuda, !regras, !links

Integrar com banco de dados, APIs ou dashboards

📸 Preview
<p align="center"> <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzM1ZTQ1NGY2Y2Q4OGQyNzY1OTExZDUxMWE3NGE2ODliMzdiZWIxNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gQKZnZsB8F9u2xBy1g/giphy.gif" alt="Bot rodando" width="500"> </p>
👨‍💻 Autor
Feito com ❤️ por GilbertoSRamos19
Se curtir, ⭐ o projeto e compartilha com a galera!

⚠️ Aviso Legal
Este bot é para fins educacionais. O uso comercial ou abusivo pode violar os termos do WhatsApp.
Use com responsabilidade.

📄 Licença
Distribuído sob a licença ISC. Veja LICENSE para mais detalhes.






