const server = require('express')();
const apolloServer = require('apollo-server-express');

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`We are live at ${port}`);
});
