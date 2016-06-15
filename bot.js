/* Require modules */

var nodeTelegramBot = require('node-telegram-bot')
, config = require('./config.json')
, request = require("request")
, cheerio = require("cheerio");

/* Functions */

/**
 * Uses the request module to return the body of a web page
 * @param  {string}   url
 * @param  {callback} callback
 * @return {string}
 */

 function getWebContent(url, callback){
  request({
    uri: url,
  }, function(error, response, body) {
    callback(body);
  });
}

/* Logic */


var bot = new nodeTelegramBot({
  token: config.token
})
.on('message', function (message) {

 if (message.text == "Hi" || message.text == "Hello" || message.text == "Sasa" || message.text == "Xaxa") {
  console.log(message);
  bot.sendMessage({
    chat_id: message.chat.id,
    text: 'Hi ' + message.chat.first_name + '. Enter the amount you want to send to your friend'
  });
}

else if (message.text == "mpesa" || message.text == "m-pesa" || message.text == "Mpesa" || message.text == "MPESA" || message.text == "M pesa" || message.text == "m pesa") {
  console.log(message);
  bot.sendMessage({
    chat_id: message.chat.id,
    text: 'Enter Amount'
  });
}

else if (message.text == "Who are you?" || message.text == "who are you" || message.text == "Who is this?" || message.text == "Who is this" || message.text == "Who" || message.text == "Who?" ) {
  console.log(message);
  bot.sendMessage({
    chat_id: message.chat.id,
    text: 'This is Vimal Kaul'
  });
}

else if (message.text >= 10 && message.text <= 49) {
  console.log(message);
  bot.sendMessage({
    chat_id: message.chat.id,
    text: 'Transaction charges to transfer Ksh  ' + message.text + ' is 1'
  });
}

else if (message.text >= 50 && message.text <= 100) {
  console.log(message);
  bot.sendMessage({
    chat_id: message.chat.id,
    text: 'Transaction charges to transfer Ksh  ' + message.text + ' is 3'
  });
}
else if (message.text >= 101 && message.text <= 500) {
  console.log(message);
  bot.sendMessage({
    chat_id: message.chat.id,
    text: 'Transaction charges to transfer Ksh  ' + message.text + ' is 11'
  });
}
else if (message.text >= 501 && message.text <= 1000) {
  console.log(message);
  bot.sendMessage({
    chat_id: message.chat.id,
    text: 'Transaction charges to transfer Ksh  ' + message.text + ' is 15'
  });
}
else if (message.text >= 1001 && message.text <= 1500) {
  console.log(message);
  bot.sendMessage({
    chat_id: message.chat.id,
    text: 'Transaction charges to transfer Ksh  ' + message.text + ' is 25'
  });
}
else if (message.text >= 1501 && message.text <= 2500) {
  console.log(message);
  bot.sendMessage({
    chat_id: message.chat.id,
    text: 'Transaction charges to transfer Ksh  ' + message.text + ' is 40'
  });
}
else if (message.text >= 2501 && message.text <= 3500) {
  console.log(message);
  bot.sendMessage({
    chat_id: message.chat.id,
    text: 'Transaction charges to transfer Ksh  ' + message.text + ' is 55'
  });
}
else if (message.text >= 3501 && message.text <= 5000) {
  console.log(message);
  bot.sendMessage({
    chat_id: message.chat.id,
    text: 'Transaction charges to transfer Ksh  ' + message.text + ' is 60'
  });
}
else if (message.text >= 5001 && message.text <= 7500) {
  console.log(message);
  bot.sendMessage({
    chat_id: message.chat.id,
    text: 'Transaction charges to transfer Ksh  ' + message.text + ' is 75'
  });
}
else if (message.text >= 7501 && message.text <= 10000) {
  console.log(message);
  bot.sendMessage({
    chat_id: message.chat.id,
    text: 'Transaction charges to transfer Ksh  ' + message.text + ' is 85'
  });
}
else if (message.text >= 10001 && message.text <= 15000) {
  console.log(message);
  bot.sendMessage({
    chat_id: message.chat.id,
    text: 'Transaction charges to transfer Ksh  ' + message.text + ' is 95'
  });
}
else if (message.text >= 15001 && message.text <= 20000) {
  console.log(message);
  bot.sendMessage({
    chat_id: message.chat.id,
    text: 'Transaction charges to transfer Ksh  ' + message.text + ' is 100'
  });
}
else if (message.text >= 20001 && message.text <= 70000) {
  console.log(message);
  bot.sendMessage({
    chat_id: message.chat.id,
    text: 'Transaction charges to transfer Ksh  ' + message.text + ' is 110'
  });
}
else if (message.text >= 70000) {
  console.log(message);
  bot.sendMessage({
    chat_id: message.chat.id,
    text: 'Sorry, amount should be less than 70,000'
  });
}
else if (message.text <= 10) {
  console.log(message);
  bot.sendMessage({
    chat_id: message.chat.id,
    text: 'Sorry, amount should be greater than 10'
  });
}
else{
  console.log(message);
  bot.sendMessage({
    chat_id: message.chat.id,
    text: 'Sorry, Couldn\'t understand. Please try again.'
  });

}
})
.start();
