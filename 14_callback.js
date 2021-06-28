const http = require('http');
const {readFile,createReadStream} = require('fs');
const server = http.createServer((req,res)=>{
   /*rdstream = createReadStream('./content/big.txt')
   rdstream.on('data',(chunk)=>{
       res.write(chunk);
       
   })
   rdstream.on('end',()=>{
        res.end("finished read")
   })
   rdstream.on('error',()=>{
    res.end("error occured")
    })
    rdstream.on('finish',()=>{
        res.end("finished task")
    })*/
    readFile("./content/big.txt","utf-8",(err,data)=>{
        res.write(data);
        res.end();
    })
   
})

server.listen(5000,()=>{
    console.log('listening on port 5000');
})