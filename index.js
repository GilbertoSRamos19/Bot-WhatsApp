const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion
} = require('@whiskeysockets/baileys');

const { Boom } = require('@hapi/boom');
const qrcode = require('qrcode-terminal'); // NOVO: precisamos instalar isso também

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('auth');
  const { version } = await fetchLatestBaileysVersion();

  const sock = makeWASocket({
    version,
    auth: state
  });

  sock.ev.on('creds.update', saveCreds);

  // NOVO: Listener para exibir QR Code corretamente
  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect, qr } = update;

    if (qr) {
      qrcode.generate(qr, { small: true });
    }

    if (connection === 'close') {
      const shouldReconnect =
        (lastDisconnect.error = Boom)?.output?.statusCode !==
        DisconnectReason.loggedOut;
      console.log('Conexão encerrada. Reconectar?', shouldReconnect);
      if (shouldReconnect) startBot();
    }

    if (connection === 'open') {
      console.log('✅ Bot conectado com sucesso!');
    }
  });

  // Detectar entrada de novos membros no grupo
  sock.ev.on('group-participants.update', async (update) => {
    const { id, participants, action } = update;

    if (action === 'add') {
      for (let user of participants) {
        await sock.sendMessage(id, {
          text: `👋 Seja bem-vindo(a) a Tech Lion® Technology @${user.split('@')[0]}!\n\n📌 Regras do grupo:\n1. Sem spam\n2. Respeite os membros\n3. Nada de links suspeitos`,
          mentions: [user]
        });
      }
    }
  });
}

startBot();
