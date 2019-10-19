const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('../auth/auth-router.js');
const toolsRouter = require('../tools/tools-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/tools', toolsRouter);

server.get('/', (req, res) => {
    res.status(200).json(`Use My Tools API`);
  });

module.exports = server;