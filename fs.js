const {readFileSync,writeFileSync} = require("fs");
const first = readFileSync("./content/first.text","UTF-8");
const second = readFileSync("./content/second.txt","UTF-8");
console.log(first,second);
writeFileSync("./content/result.txt",`this is the result of ${first} and ${second} files`, {flag : 'a'});