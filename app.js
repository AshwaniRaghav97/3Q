let {url} = require('url');
let url = new URL('https://www.example.com/path?name=abc&age=30');

console.log(url.protocol);
console.log(url.host);
console.log(url.pathname);
console.log(url.searchParams.get('name'));
console.log(url.searchParams.get('age'));
console.log(url.href);





