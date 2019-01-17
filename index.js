// const express = require('express');
const server = require('./server');
// const bearRoutes = require('./allRoutes/bearRoutes');
// const zooRoutes = require('./allRoutes/zooRoutes');
// server.use('/api/zoos', zooRoutes);
// server.use('/api/daBears', bearRoutes);


const port = process.env.PORT || 7304;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on === \n=== http://localhost:${port} ===\n`);
});
