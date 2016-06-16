if(process.env.NODE_ENV === 'production') {
var token = process.env.TOKEN;
}
else{
  var token = '';
}
var Bot = require('node-telegram-bot-api');
var bot;

if(process.env.NODE_ENV === 'production') {
  bot = new Bot(token);
  bot.setWebHook('https://mpesa-telegram.herokuapp.com/' + bot.token);
}
else {
  bot = new Bot(token, { polling: true });
}

console.log('bot server started...');

// hello command
bot.on('message', function (message) {

 if (message.text == "Hi" || message.text == "Hello" || message.text == "Sasa" || message.text == "Xaxa") {
  console.log(message);
  var text = 'hello'
  bot.sendMessage(message.chat.id, text);
}

else if (message.text == "mpesa" || message.text == "m-pesa" || message.text == "Mpesa" || message.text == "MPESA" || message.text == "M pesa" || message.text == "m pesa") {
  console.log(message);
  var text = 'Enter Amount'
  bot.sendMessage(message.chat.id, text);
}

else if (message.text == "Who are you?" || message.text == "who are you" || message.text == "Who is this?" || message.text == "Who is this" || message.text == "Who" || message.text == "Who?" ) {
  console.log(message);
  var text = 'This is Vimal Kaul'
  bot.sendMessage(message.chat.id, text);
}

else if (message.text >= 10 && message.text <= 49) {
  console.log(message);
  var text = 'Transaction charges to transfer Ksh ' + message.text + ' is Ksh 1'
  bot.sendMessage(message.chat.id, text);
}

else if (message.text >= 50 && message.text <= 100) {
  console.log(message);
  var text = 'Transaction charges to transfer Ksh ' + message.text + ' is Ksh 3'
  bot.sendMessage(message.chat.id, text);
}
else if (message.text >= 101 && message.text <= 500) {
  console.log(message);
  var text = 'Transaction charges to transfer Ksh ' + message.text + ' is Ksh 11'
  bot.sendMessage(message.chat.id, text);
}
else if (message.text >= 501 && message.text <= 1000) {
  console.log(message);
  var text = 'Transaction charges to transfer Ksh ' + message.text + ' is Ksh 15'
  bot.sendMessage(message.chat.id, text);
}
else if (message.text >= 1001 && message.text <= 1500) {
  console.log(message);
  var text = 'Transaction charges to transfer Ksh ' + message.text + ' is Ksh 25'
  bot.sendMessage(message.chat.id, text);
}
else if (message.text >= 1501 && message.text <= 2500) {
  console.log(message);
  var text = 'Transaction charges to transfer Ksh ' + message.text + ' is Ksh 40'
  bot.sendMessage(message.chat.id, text);
}
else if (message.text >= 2501 && message.text <= 3500) {
  console.log(message);
  var text = 'Transaction charges to transfer Ksh ' + message.text + ' is Ksh 55'
  bot.sendMessage(message.chat.id, text);
}
else if (message.text >= 3501 && message.text <= 5000) {
  console.log(message);
  var text = 'Transaction charges to transfer Ksh ' + message.text + ' is Ksh 60'
  bot.sendMessage(message.chat.id, text);
}
else if (message.text >= 5001 && message.text <= 7500) {
  console.log(message);
  var text = 'Transaction charges to transfer Ksh ' + message.text + ' is Ksh 75'
  bot.sendMessage(message.chat.id, text);
}
else if (message.text >= 7501 && message.text <= 10000) {
  console.log(message);
  var text = 'Transaction charges to transfer Ksh ' + message.text + ' is Ksh 85'
  bot.sendMessage(message.chat.id, text);
}
else if (message.text >= 10001 && message.text <= 15000) {
  console.log(message);
 var text = 'Transaction charges to transfer Ksh ' + message.text + ' is Ksh 95'
  bot.sendMessage(message.chat.id, text);
}
else if (message.text >= 15001 && message.text <= 20000) {
  console.log(message);
  var text = 'Transaction charges to transfer Ksh ' + message.text + ' is Ksh 100'
  bot.sendMessage(message.chat.id, text);
}
else if (message.text >= 20001 && message.text <= 70000) {
  console.log(message);
  var text = 'Transaction charges to transfer Ksh ' + message.text + ' is Ksh 110'
  bot.sendMessage(message.chat.id, text);
}
else if (message.text >= 70000) {
  console.log(message);
  var text = 'Sorry, amount should be less than 70,000'
  bot.sendMessage(message.chat.id, text);
}
else if (message.text <= 10) {
  console.log(message);
  var text = 'Sorry, amount should be greater than 10'
  bot.sendMessage(message.chat.id, text);
}
else{
  console.log(message);
  var text = 'Sorry, I could not understand the message.'
  bot.sendMessage(message.chat.id, text);

}

});

module.exports = bot;