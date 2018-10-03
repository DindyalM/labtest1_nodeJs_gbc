const http = require('http');
const os = require("os");
const sysinfo = require("./os.info/systeminfo")
const fire = require("./os.info/firewall")


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  if(req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json'});

    res.end('No data found');
  }

  else if(req.url === '/api/systeminfo') {
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify(sysinfo.getSystemInfo()));
  }
  else if(req.url === '/api/userinfo') {
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify(sysinfo.getUserInfo()));
  }
  else if(req.url === '/api/firewall') {
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify(fire.getStatus()));
  }
  else{
    res.writeHead(404, { 'Content-Type': 'application/json'});
    res.end("404 Not Found,")
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});