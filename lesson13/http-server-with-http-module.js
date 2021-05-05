const http = require('http')
const PORT = 1904

const server = http.createServer(processRequest)
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

function processRequest(req, rsp) {
  console.log(`${req.method}`)
  console.log(`${req.url}`)
  console.log(req.headers)

  rsp.statusCode = 200
  rsp.setHeader('Content-Type', 'text/plain')
  rsp.end("Hello from server") 
}








