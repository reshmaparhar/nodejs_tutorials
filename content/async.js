const {readFile,writeFile} = require('fs');
readFile("./content/first.text", "utf-8", function(err,result){
    if (err){
        console.log(err);
        return;
    }
    console.log(result);
});