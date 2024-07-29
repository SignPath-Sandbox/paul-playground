/**
 * Should trigger a code scanning warning due to hard-coded secrets.
 * See https://codeql.github.com/codeql-query-help/javascript/js-hardcoded-credentials/
 */
let base64 = require('base-64');

let url = 'http://example.org/auth';
let username = 'username';
let password = 'password';

let headers = new Headers();

headers.append('Content-Type', 'text/json');
headers.append('Authorization', 'Basic' + base64.encode(username + ":" + password));

fetch(url, {
          method:'GET',
          headers: headers
       })
.then(response => response.json())
.then(json => console.log(json))
.done();