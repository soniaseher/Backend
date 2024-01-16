require('dotenv').config()
const express = require('express')
const app = express()

PORT = 4000
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  res.send('<h1>Please login</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})