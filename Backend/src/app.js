import http from 'http';

const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`<h1>Página Principal</h1>`)
  }
  if (req.url === "/teste") {
    res.end(`<h1>Página de Teste</h1>`)
  }
  if (req.url === "/number") {
    res.end(`<h1>1000</h1>`)
  }

  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  // res.end('Meu primeito projeto Node JS');
})

server.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}/`);
});
