const express = require('express');
const app = express();

const connect = require('./src/db/db.js').connect;

app.get('/', (req, res) => {


  res.send('Hello World!');
});

const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  db = connect();
});
