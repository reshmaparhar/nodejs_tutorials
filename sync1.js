const {readFileSync,writeFileSync} = require('fs');
console.log("hello");
const first = readFileSync('./content/first.text',"utf-8");
console.log("hi");
const second = readFileSync('./content/second.txt',"utf-8");
console.log("Good Morning");
writeFileSync('./content/result.txt',`Good morning ${first} ${second}`,{flag :'a'});
console.log("welcome  Morning");
console.log("welcome  to Morning");
