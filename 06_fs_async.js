const {readFile,writeFile} = require('fs').promises;
/*const util = require('util');
const readfilepromise = util.promisify(readFile);
const writefilepromise = util.promisify(writeFile);
/*const getText = (path) =>{
    return new Promise ((resolve,reject) => {
        readFile(path,'utf-8',(err,result)=>{
            if(err){
                reject(err);
            }
           
            else{
                resolve(result);
            }
        });
    });
}*/
const start = async() =>{
    try{
        const first = await readFile('./content/second.txt','utf-8');
        const second = await readFile('./content/first.text','utf-8');
        await writeFile('./content/awaitres.txt',`Welcome hello I am reshma ${first}${second}`,{flag :'a'});
        console.log(first,second); 
    }
    catch(error){
        console.log(error);
    }
}
start();
/*getText('./content/first.text')
.then((result) => console.log(result))
.catch((err) => console.log(err))*/