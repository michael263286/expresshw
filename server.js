const http = require('http');
const express = require('express');
const data = require('./public/js/data');

const hostname = '127.0.0.1';
const port = 3000;

// create express app
const app = express()

// create http server and handle requests with express app
const server = http.createServer(app)

// load static files from "public" folder before other routes
app.use(express.static('./public'))





server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});