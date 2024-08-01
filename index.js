const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  // this line here triggers a CRITICAL security alert
  // see https://github.com/github/codeql/blob/54ac18092daa7abb973bcd42063a01771e38e04a/javascript/ql/src/Security/CWE-094/CodeInjection.ql
  // console.log(eval(req.query.js));
  res.send('Hello World')
})

// this line triggers a MEDIUM security alert
// see https://github.com/github/codeql/blob/54ac18092daa7abb973bcd42063a01771e38e04a/javascript/ql/src/Security/CWE-200/PrivateFileExposure.ql
app.use(express.static('node_modules/express'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})