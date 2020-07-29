const mysql = require('mysql');
const express =require('express');
const app = express();

const port = process.env.PORT || 3000;

const server = app.listen(port, function() {
  console.log('API listening on port ' + port);
});


const connection = mysql.createConnection({
  host:'127.0.0.1',
  user:'dev',
  port: 8888,
  password:'password',
  database:'company'
});
connection.connect()
console.log('database connected')
