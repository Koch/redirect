
const http = require('http');
const port = process.env.PORT || 8080;

const requestHandler = (request, response) => {
  if (request.url === '/health') {
    response.end('ok');
  } else {
    response.writeHead(301, { Location: `${process.env.REDIRECT_URL}` });
  }
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something went wrong', err);
  }

  console.log(`server is listening on ${port}`);
});
