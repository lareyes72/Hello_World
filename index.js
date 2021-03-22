'use extrict'

const http = require('http')

const port = process.env.PORT

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(req.method)
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})