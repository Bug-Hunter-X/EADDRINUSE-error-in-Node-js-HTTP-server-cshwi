const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

function startServer() {
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

function handleError(err) {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use, retrying in 1 second...`);
    setTimeout(startServer, 1000);
  } else {
    console.error('An unexpected error occurred:', err);
  }
}

try {
  startServer();
} catch (err) {
  handleError(err);
}
