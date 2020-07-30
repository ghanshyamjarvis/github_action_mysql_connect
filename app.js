const mysql = require('mysql');
const express =require('express');
const app = express();

const port = process.env.PORT || 3005;

const server = app.listen(port, function() {
  console.log('API listening on port ' + port);
});

const connection = mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'password',
  port: 3307
});
 connection.connect()
 console.log('database connected')
connection.end()
console.log('database connected11')
server.close();
