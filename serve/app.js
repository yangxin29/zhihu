const express = require('express')
const app = express()
// const path = require('path')

// app.use(express.static(path.join(__dirname)))
app.listen(4000, () => {
  console.log('listen to htttp://localhost')
})

app.get('/api/123', (req, res) => {
  res.send('12345')
})
