
/*
* should trigger because of https://codeql.github.com/codeql-query-help/javascript/js-assignment-to-constant/
*/

function test() {
    const loc = null;
    if (dist < 10)
        loc = "here";
    else
        loc = "there";    
}
