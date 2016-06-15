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

  if (message.text == "mpesa" || message.text == "m-pesa" || message.text == "Mpesa" || message.text == "MPESA" || message.text == "M pesa" || message.text == "m pesa") {
    console.log(message);
      bot.sendMessage({
          chat_id: message.chat.id,
          text: 'Enter Amount'
      });
  }
  
  if (message.text >= 10 && message.text <= 49) {
    console.log(message);
      bot.sendMessage({
          chat_id: message.chat.id,
          text: '1'
      });
  }
  else if (message.text >= 50 && message.text <= 100) {
    console.log(message);
      bot.sendMessage({
          chat_id: message.chat.id,
          text: '3'
      });
  }
  else if (message.text >= 101 && message.text <= 500) {
    console.log(message);
      bot.sendMessage({
          chat_id: message.chat.id,
          text: '11'
      });
  }
  else if (message.text >= 501 && message.text <= 1000) {
    console.log(message);
      bot.sendMessage({
          chat_id: message.chat.id,
          text: '15'
      });
  }
  else if (message.text >= 1001 && message.text <= 1500) {
    console.log(message);
      bot.sendMessage({
          chat_id: message.chat.id,
          text: '25'
      });
  }
  else if (message.text >= 1501 && message.text <= 2500) {
    console.log(message);
      bot.sendMessage({
          chat_id: message.chat.id,
          text: '40'
      });
  }
  else if (message.text >= 2501 && message.text <= 3500) {
    console.log(message);
      bot.sendMessage({
          chat_id: message.chat.id,
          text: '55'
      });
  }
  else if (message.text >= 3501 && message.text <= 5000) {
    console.log(message);
      bot.sendMessage({
          chat_id: message.chat.id,
          text: '60'
      });
  }
  else if (message.text >= 5001 && message.text <= 7500) {
    console.log(message);
      bot.sendMessage({
          chat_id: message.chat.id,
          text: '75'
      });
  }
  else if (message.text >= 7501 && message.text <= 10000) {
    console.log(message);
      bot.sendMessage({
          chat_id: message.chat.id,
          text: '85'
      });
  }
  else if (message.text >= 10001 && message.text <= 15000) {
    console.log(message);
      bot.sendMessage({
          chat_id: message.chat.id,
          text: '95'
      });
  }
  else if (message.text >= 15001 && message.text <= 20000) {
    console.log(message);
      bot.sendMessage({
          chat_id: message.chat.id,
          text: '100'
      });
  }
  else if (message.text >= 20001 && message.text <= 70000) {
    console.log(message);
      bot.sendMessage({
          chat_id: message.chat.id,
          text: '110'
      });
  }
  else if (message.text >= 70000) {
    console.log(message);
      bot.sendMessage({
          chat_id: message.chat.id,
          text: 'Amount should be less than 70,000'
      });
  }
  else if (message.text <= 10) {
    console.log(message);
      bot.sendMessage({
          chat_id: message.chat.id,
          text: 'Amount should be greater than 10'
      });
  }
})
.start();
