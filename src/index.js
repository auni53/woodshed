const express = require('express');
const app = express();

const connect = require('./db/db.js').connect;

app.get('/', (req, res) => {


  res.send('Hello World!');
});

const port = 8080;
const server = app.listen(port);
console.log(`Listening on ${port}`);




module.exports = server; // make server available for tests
