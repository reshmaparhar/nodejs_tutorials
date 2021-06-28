/*const {writeFile} = require('fs');
for (let i = 0;i < 10000;i++){
    writeFile('./content/big.txt','hello world',{flag:'a'},()=>{
        
    })
    //console.log('hello');
}
console.log('hi');*/
const {createReadStream} = require('fs');

const stream = createReadStream('../content/big.txt',{highWaterMark :90000,encoding:'utf-8'});
stream.on('data',(data)=>{
    console.log(data);
})
stream.on('error',(err)=>{
    console.log(err);
})