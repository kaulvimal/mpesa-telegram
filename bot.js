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

db = require('./db');

// hello command
bot.on('message', function (message) {

if (message.text == "Hi" || message.text == "Hello" || message.text == "Sasa" || message.text == "Xaxa" || message.text == "hi" || message.text == "hello") {
  console.log(message);
  var text = 'Hi ' + message.chat.first_name + '. Enter the amount you want to send to your friend'
  bot.sendMessage(message.chat.id, text);
  var post = {from: message.chat.first_name,to:message.chat.id,msg:message.text};
  var query = db.query('INSERT INTO messages SET ?', post, function(err, result) {
      if (err) throw err;
      });
}
else {

  var mpesa_amount = message.text;
  var query = db.query('SELECT other_mpesa, unregistered_mpesa, withdraw FROM query WHERE '+mpesa_amount+' BETWEEN `from_amount` AND `to_amount`;', function(err, rows) {
    if (err){
      console.log('Error while performing Query.');
      bot.sendMessage(message.chat.id, 'Invalid Amount');
      var post = {from: message.chat.first_name,to:message.chat.id,msg:message.text};
      var query = db.query('INSERT INTO messages SET ?', post, function(err, result) {
          if (err) throw err;
          });
    }

    else {
      console.log(rows[0].other_mpesa);
      console.log(rows[0].unregistered_mpesa);
      console.log(rows[0].withdraw);
      var other_mpesa = rows[0].other_mpesa;
      var unregistered_mpesa = rows[0].unregistered_mpesa;
      var withdraw = rows[0].withdraw;

        if (other_mpesa === "Sorry Amount Should be less than Ksh 70,000" || other_mpesa === "Sorry Amount should be greater than 9" )

          {
          var results = 'Invalid Amount'
          bot.sendMessage(message.chat.id, results); 
          var post = {from: message.chat.first_name,to:message.chat.id,msg:message.text};
          var query = db.query('INSERT INTO messages SET ?', post, function(err, result) {
              if (err) throw err;
              });
          }
        else
          {
          var results = 'Transfer to other M-PESA Users - ' + other_mpesa + "\n" + 'Transfer to Unregistered Users - ' + unregistered_mpesa + "\n" +'Withdraw From M-PESA Agent - ' + withdraw;
          bot.sendMessage(message.chat.id, results);
          var post = {from: message.chat.first_name,to:message.chat.id,msg:message.text};
          var query = db.query('INSERT INTO messages SET ?', post, function(err, result) {
              if (err) throw err;
              });
          }
        }
  
  });
}
});


module.exports = bot;
