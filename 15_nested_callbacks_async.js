const {readFile,writeFile} = require('fs');
console.log("start");
readFile("./content/first.text", "utf-8", function(err,result){
    if (err){
        console.log(err);
        return;
    }
    //console.log(result);
    const first =result;
    readFile("./content/second.txt", "utf-8", function(err,result){
        if (err){
            console.log(err);
            return;
        }
        //console.log(result);
        second = result;
        writeFile('./content/async_output.txt',`this is the output ${first} ${second}`, {flag:'a'},function(err,result){
            if(err){
                console.log(err);
                return;
            }
            console.log("done with the task");
        });
    });
});
console.log("starting with the new task");