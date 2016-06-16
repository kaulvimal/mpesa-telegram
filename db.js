var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     	: 'us-cdbr-iron-east-04.cleardb.net',
    user     	: 'ba831251347bb2',
    password 	: 'a5c7fcdb',
    database    : 'heroku_41285c171040c30'
});

connection.connect(function(err) {
    if (err) {
    console.error('error connecting: ' + err.stack);
    return;
}});

module.exports = connection;