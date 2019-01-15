const express = require('express');
const helmet = require('helmet');
const server = express();
const bearRoutes = require('./allRoutes/bearRoutes');
// const zooRoutes = require('./allRoutes/zooRoutes');


// const knexConfig = require('./knexfile');
// const knex = require('knex');
// const router = express.Router();
// const db = knex(knexConfig.development);
// console.log(knexConfig);

module.exports = server => {
};
server.use(express.json()); // json body parser
server.use(helmet());

// server.use('/api/zoos', zooRoutes);
server.use('/api/daBears', bearRoutes);
//routes
server.get('/', (req, res) => {
  res.send(`API working.\n Sanity Check\n Test Route!`);
});

module.exports = server;