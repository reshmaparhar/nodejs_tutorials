const http = require('http');
server = http.createServer();
server.on('request',(req,res)=>{
    res.write('hello world');
    res.end();
})
server.listen(5000);
