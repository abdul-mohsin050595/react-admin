
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('/db.json')

const middlewares = jsonServer.defaults({
    static: "./dist",
  });

server.use(middlewares);
server.use(router);

server.use(
  jsonServer.rewriter({
    "api/*" : "/v1",
  })
);

server.listen(8080, () => {
  console.log('JSON Server is running')
})