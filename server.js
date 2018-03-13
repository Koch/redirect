
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(301, { Location: `${process.env.REDIRECT_URL}` });
  res.end();
});

server.listen(8080);
console.log("listening and redirecting");
