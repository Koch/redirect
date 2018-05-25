
const http = require('http');
const port = process.env.PORT || 8080;
const bunyan = require('bunyan');
const splunkBunyan = require('splunk-bunyan-logger');

const splunkStream = splunkBunyan.createStream(
{
  token: process.env.SPLUNK_TOKEN,
  url: process.env.SPLUNK_URL
});

const Logger = bunyan.createLogger({
  name: process.env.LOGGER_NAME,
  streams: [
    splunkStream
  ]
});

const log = (r, m) => {
  var payload = {
    req: r
  };

  Logger.info(p, n)
}

const requestHandler = (request, response) => {
  log(request, 'New request received');
  if (request.url === '/health' || request.url === 'health') {
    response.end('ok');
  } else {
    response.writeHead(301, { Location: `${process.env.REDIRECT_URL}` });
  }
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.info('something went wrong', err);
  }

  console.info(`server is listening on ${port}`);
});
