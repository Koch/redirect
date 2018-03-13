
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(301, { Location: `https://${req.headers.host}:8443/` });
  res.end();
});

server.listen(8080);
console.log("listening and redirecting");
