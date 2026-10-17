const http = require('http')

const hostname = process.env.hostname || '127.0.0.1'
const port = process.env.port || 3001

const server = http.createServer((req, res) => {
  console.log("Request received")
  console.log(req.url)

  const url = new URL(req.url, `http://${hostname}:${port}`)
  const search_params = url.searchParams

  console.log("Queries: " + search_params)

  if (req.method === 'GET') {
    const x = Number(search_params.get("x"))
    const y = Number(search_params.get("y"))

    const resultX = Math.log2(x)
    const resultY = Math.log2(y)

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end(`log2(${x}) is ${resultX} and log2(${y}) is ${resultY}`)
  } else {
    console.log("Status 404")
    res.statusCode = 404
    res.end()
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})