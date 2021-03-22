'use extrict'


const http = require('http')
//const { stringify } = require('node:querystring')

const port = process.env.PORT

const server = http.createServer((req, res) => {
  
  let body = [];
  req.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    // at this point, `body` has the entire request body stored in it as a string
  });
  
  
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(body)
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})