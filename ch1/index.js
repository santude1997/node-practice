// // chllange-1

// 1: create a folder with your own name
// 2: create a file name with Bio.txt and added data in it.
// 3: added more data in the same file
// 4.read data from the file 
// 5: rename the file as my-bio.txt 
// 6: delete the both file 


const fs = require("fs");

// folder is created with my name

fs.mkdirSync("santu");

// file is created in the same folder and update with some data 
fs.writeFileSync("santu/bio.txt","Hello i am accepting your challeng as a software developer ");

// write some moore data in the same file 

fs.appendFileSync("santu/bio.txt","\n Now I am waiting for your next challenge");

// Reade data from the last file 

const read_data = fs.readFileSync("santu/bio.txt").toString();
console.log(read_data);

// to rename the file

fs.renameSync("santu/bio.txt","santu/myBio.txt");

// to delete the file
fs.unlinkSync("santu/myBio.txt")