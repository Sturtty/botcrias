const { createClient } = require('bedrock-protocol');

function startBot() {
  const client = createClient({
    host: 'criassever2025.aternos.me',
    port: 29283,
    username: 'BotCrias',
    version: '1.21.93'
  });

  client.on('join', () => {
    console.log('✅ BotCrias entrou no servidor Bedrock!');
  });

  client.on('disconnect', () => {
    console.log('⛔ BotCrias foi desconectado. Reconectando...');
    setTimeout(startBot, 5000);
  });

  client.on('error', (err) => {
    console.error('Erro:', err);
  });
}

startBot();