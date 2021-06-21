const http = require("http");
const server = http.createServer(function(req, res){
    if(req.url === "/"){
        res.end("welcome to home page");
    }
    if(req.url === "/about"){
        res.end("welcome to about page");
    }
    
    res.end(`
        <h4>Oops !</h4>
        <p>we can't find a page that you are looking for</p>
        <a href ="/">back home </a>
        `
    );
})
server.listen(5000);