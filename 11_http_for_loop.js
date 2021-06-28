const http =require('http');
server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('this is my home page');
        
    }
    if(req.url === '/about'){
        for(let i = 0;i < 1000;i++){
            for(let j = 0;j < 1000;j++){
                console.log(`${i}, ${j}`);
            }
        }
        res.end('this is my about page');
    }
});
server.listen(5000,()=>{
    console.log("server is listening on port 500");
});
