const fs = require("fs");

// creating a new file
fs.writeFileSync("read.txt","Hello my name is santu de i am a software developer")

// over write the file
fs.writeFileSync("read.txt","currently i am work in RWS")

// write something in the exting file 
fs.appendFileSync("read.txt","\n I am a software developer at this company with 1.5 years exprerience");



// read somthing in the file which is retten in the file

const buf_data = fs.readFileSync("read.txt");
org_data = buf_data.toString()
console.log(org_data);

// rename the exsting file 

fs.renameSync("read.txt","read-write.txt");