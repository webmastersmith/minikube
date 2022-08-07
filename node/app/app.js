const express = require('express')
const os = require('os')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`Hello World from ${os.hostname}`)
})

app.get('/nginx', (req, res) => {
  const url = 'http://nginx'
  fetch(url).then((response) => {
    return response.text()
  }).then((text) => {
    res.send(text)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})