// functions/films.js

const jsonServer = require('json-server');
const express = require('express');
const server = express();
const router = jsonServer.router('db.json'); // Path to your db.json file
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;
