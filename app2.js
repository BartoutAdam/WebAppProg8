const http = require('http')

const hostname = process.env.hostname || '127.0.0.1'
const port = process.env.port || 3001

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')

  res.write('<!DOCTYPE html>')
  res.write('<html><head><title>Cities to Visit</title></head>')
  res.write('<body>')
  res.write('<h1>Adam Bartout</h1>')
  res.write("<h2>Cities I'd Like to Visit</h2>")

  res.write(`
    <table border="1">
      <tr>
        <th>City</th>
        <th>Reason to Visit</th>
        <th>Distance from Casablanca</th>
        <th>Estimated Cost</th>
      </tr>
      <tr>
        <td>Paris, France</td>
        <td>I've always wanted to see the Eiffel Tower in person.</td>
        <td>1,150 miles</td>
        <td>$250</td>
      </tr>
      <tr>
        <td>Berlin, Germany</td>
        <td>I love the history and the whole vibe of the city.</td>
        <td>1,430 miles</td>
        <td>$350</td>
      </tr>
      <tr>
        <td>Tokyo, Japan</td>
        <td>It looks like an amazing mix of old traditions and modern technology.</td>
        <td>6,800 miles</td>
        <td>$900</td>
      </tr>
      <tr>
        <td>Shanghai, China</td>
        <td>I've heard the skyline is incredible and I want to see it myself.</td>
        <td>6,500 miles</td>
        <td>$850</td>
      </tr>
    </table>
  `)

  res.end('</body></html>')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})