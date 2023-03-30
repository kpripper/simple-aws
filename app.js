var express = require('express')
var app = express()
var fs = require('fs')
var port = 8080

app.get('/', function (req, res) {
  html = fs.readFileSync('index.html')
  res.writeHead(200)
  res.write(html)
  res.end()
})

// New code
app.get('/test', function (req, res) {
  res.send('the REST endpoint test run!')
})

app.listen(port, function () {
  console.log('Ця хрень запустилася на порту ', port)
})
