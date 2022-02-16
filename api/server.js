const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const ownersRouter = require('../owners/owners-router.js');
const rentersRouter = require('../renters/renters-router.js');
const itemsRouter = require('../items/items-router.js');
const rentalsRouter = require('../rentals/rentals-router.js')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/owners', ownersRouter);
server.use('/api/renters', rentersRouter);
server.use('/api/items', itemsRouter);
server.use('/api/rentals', rentalsRouter);

server.get('/', (req, res) => {
    res.status(200).json(`Rent from me`);
  });

module.exports = server;