const http=require('http');
http.createServer((req, res) {
 res.end('Hello fro jenkins CI/CD Build running. \n);
}).listen(3000);

