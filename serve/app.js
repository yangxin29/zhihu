const express = require('express')
const app = express()
const hot = require('./api/hot/hot')
// const path = require('path')

// app.use(express.static(path.join(__dirname)))
app.listen(4000, () => {
  console.log('listen to htttp://localhost')
})

const API = '/api'

app.use(`${API}/hot`, hot)
