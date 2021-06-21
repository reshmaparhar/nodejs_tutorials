const http = require('http');
http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('hello world');
        res.end();
    }
    if(req.url == '/about'){
        res.write('wecome to my about world');
        res.end();
    }
    
    res.write(`
    <h1> hello world</h1>
    <a href = '/'>back to home</a>
    `);
    res.end();
}).listen(5000);
//server.listen(5000);