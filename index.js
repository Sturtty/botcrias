const mineflayer = require('mineflayer');

function startBot() {
  const bot = mineflayer.createBot({
    host: 'criassever2025.aternos.me',
    port: 29283,
    username: 'BotCrias',
    version: '1.21.93'
  });

  bot.on('login', () => {
    console.log('✅ BotCrias entrou no servidor!');
  });

  bot.on('end', () => {
    console.log('⛔ Bot caiu. Reconectando...');
    setTimeout(startBot, 5000);
  });

  bot.on('error', err => console.log('Erro:', err));
}

startBot();
