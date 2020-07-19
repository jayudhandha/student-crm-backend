const app = require('http');
const expAppModule = require('./app')

const server = app.createServer(expAppModule);

server.listen(3000)
