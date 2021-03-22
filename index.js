const http = require('http');
const port = process.env.PORT;

const server = http.createServer((req, res) => {
  
  let body = [];
  request.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    response.end(body);
  });
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})