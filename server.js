const http = require('http');
http.createServer((req, res) => {
 res.end('Hello from jenkins CI/CD Build running.\n');
}).listen(3000);

