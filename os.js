const os = require('os');;
//const user = os.userInfo();
//console.log(user);
//info about current user
//method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()}`);
const currentOs = {
    name:os.type(),
    release:os.release(),
    total_memory:os.totalmem(),
    free_mem:os.freemem()
};
console.log(currentOs);