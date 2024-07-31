const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  // this line here triggers a critical security alert
  console.log(eval(req.query.js));
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})