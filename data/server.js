const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('produtos.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});