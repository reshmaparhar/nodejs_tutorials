const http = require('http');
const {readFile} = require('fs');
server = http.createServer((req,res) => {
    console.log("requested event");
    res.write("hello world");
    res.end();
});
readFile("./content/first.text", "utf-8", function(err,result){
    if (err){
        console.log(err);
        return;
    }
    console.log(result);
})
setInterval(()=>{
    console.log('soni');
},1000);
setTimeout(()=>{
    console.log("hello world")
},1000);
server.listen(
    ()=>{
        console.log("hi");
    }, 5000);
console.log("reshma");