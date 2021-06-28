const {readFile,writeFile} = require('fs');
const util = require('util');
readfilepromise = util.promisify(readFile);
writefilepromise = util.promisify(writeFile);
const gettext = function(path){
    setTimeout((path)=>{
        return new Promise((resolve,reject)=>{
            readfile(path,'utf-8',(err,result)=>{
                if(err){
                    console.log('error occured');
                    reject;
                }
                 resolve;
            }
            
        )})
    },1000)
}
gettext('./content/big.txt')
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
})
/*readFile('./content/big.txt','utf-8',(err,result)=>{
    if(err){
        throw err;
    }
   
    first = result;
    console.log("read first file");

    readFile('./content/first.text','utf-8',(err,result)=>{
        if(err){
        throw err;
        }
        console.log("read second file");

        second = result;
        console.log("read second file");

        readFile('./content/awaitres.txt','utf-8',(err,result)=>{
            if(err){
                throw err;
             }
            third = result;
            readFile('./content/second.txt','utf-8',(err,result)=>{
                if(err){
                    throw err;
                }
                fourth = result;
                writeFile('./content/async.txt',`${first}${second}${third}`,{flag:'a'},(err)=>{
                    if(err){
                        throw err;
                    }
                    console.log("done with the task");
                });
        })
    })
    console.log('hello00');
})
});
setTimeout(readFile('./content/big.txt','utf-8',(err,result)=>{
    if(err){
        throw err;
    }
   
    first = result;
    console.log("read first file")}),5000);

console.log("Program of async")*/
/*const asyncfunction = async()=>{
    try{
        first = await readFile('./content/result.txt','utf-8');
        second = await readFile('./content/async.txt','utf-8');
        third = await readFile('./content/second.txt','utf-8');
        fourth = await readFile('./content/first.text','utf-8');
        await writeFile('./content/big.txt',`${first + second + third + fourth}`,{flag:'a'});
        console.log('completed with the task');
    }
    catch(error){
        throw error;
    }
}
console.log('started with the task');
asyncfunction();
console.log('Done with the task');*/
