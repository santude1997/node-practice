const os = require("os");

// calculate the free memory size in the local system
const freeMemory = os.freemem();
console.log(`total avalable momory = ${freeMemory / 1024 / 1024 / 1024} GB`);

// calculate the total memory size in your local system

const totalMemory = os.totalmem();
console.log(`Total Memory = ${totalMemory / 1024 / 1024 / 1024} GB`);

// find the architure of your system

console.log(`The architure of the system is =`, os.arch());

// find the host name of your system

console.log(`your host name is  = `, os.hostname());

// find the plat from name of your system

console.log(`Your plat from name is  =  `, os.platform());

// find the tempurary diractory of your system

console.log(`Your tempurary diractory is = `, os.tmpdir());

// Find the Home diractory of your system

console.log(`Your Home diractory is  = `, os.homedir());

// find your OS type in your system
console.log(`Your OS type in the system is  = `, os.type());
