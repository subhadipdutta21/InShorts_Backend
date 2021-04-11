const server = require("./server");

server
  .listen({ port: 5000 })
  .then(() => console.log("🚀 GraphQL server running at 5000!"))
  .catch((err) => console.log(err));
