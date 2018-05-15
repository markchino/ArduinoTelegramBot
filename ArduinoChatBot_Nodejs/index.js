const TelegramBot = require('node-telegram-bot-api');

const token = '550524372:AAHiYjabhshqZF6AbuPiHLbwXFfJT2XQswo';

const bot = new TelegramBot(token, {
  polling: true
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  var Mensaje = msg.text;
  if(Mensaje == "encender"){
    console.log("encendiendo el led");
    bot.sendMessage(chatId, 'Encendere el led');
  } else if(Mensaje == "apagar"){
    console.log("apagar el led");
    bot.sendMessage(chatId, 'Apagare el led');
  }
});
