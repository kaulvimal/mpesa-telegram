var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     	: 'localhost',
    user     	: 'root',
    password 	: 'password',
    database    : 'db'
});

connection.connect(function(err) {
    if (err) {
    console.error('error connecting: ' + err.stack);
    return;
}});
module.exports = connection;
