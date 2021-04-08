const express = require('express');
const database = require('./users/model');

const server = express();
server.use(express.json());

const port = 8080;

module.exports = server; // EXPORT YOUR SERVER instead of {}
