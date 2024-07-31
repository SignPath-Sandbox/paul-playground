const express = require('express')
const app = express()
const port = 3000



app.get('/', (req, res) => {
  console.log(eval(req.query.js));
  callWeb().then(() => res.send(test(req.query.dist || 3)))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*
* should trigger because of https://codeql.github.com/codeql-query-help/javascript/js-assignment-to-constant/
*/

function test(dist) {
    const loc = null;
    if (dist < 10)
        loc = "here";
    else
        loc = "there"; 

    return "Hello"   
}

/**
 * Should trigger a code scanning warning due to hard-coded secrets.
 * See https://codeql.github.com/codeql-query-help/javascript/js-hardcoded-credentials/
 */
function callWeb() {

  let url = 'https://about.signpath.io/assets/MicrosoftEntraIDScimConfiguration.json';
  let username = 'username';
  let password = 'password';

  let headers = new Headers();

  headers.append('Content-Type', 'text/json');
  headers.append('Authorization', 'Bearer' + password);

  return fetch(url, {
            method:'GET',
            headers: headers
         })
  .then(response => response.json())
  .then(json => console.log(json))
}