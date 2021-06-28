function func1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const error = true;
            if(!error){
                console.log('hello world');
                resolve("no error");
            }
            else{
                reject(error);
            }
        },5000)
    })
};
func1().then(()=>{
    console.log('resolved successfulle');
})
.catch((error)=>{
    console.log(error);
});