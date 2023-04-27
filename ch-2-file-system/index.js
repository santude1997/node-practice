// 1. create a folder with your own name.
// 2. create a file name Bio.txt
// 3. added some data into it
// 4. read data from it
// 5. rename the file which you created previously
// 6. delete the folder and the file

const fs = require("fs");

// folder is created by user name

fs.mkdir("santu", (err) => {
  console.log("Folder is created ");
});

// Data is updated in the Bio.txt file

fs.writeFile("./santu/bio.txt", "Hello welcome to node js", (err) => {
  console.log("file is writen");
});

// added some more line in the same file

fs.appendFile(
  "./santu/bio.txt",
  "\t Here I am prepare for a full stack developer",
  (err) => {
    console.log("data is added in the same file ");
  }
);

// rename bio.txt to my Bio.txt

fs.rename("./santu/bio.txt", "./santu/myBio.txt", (err) => {
  console.log("rename the file successfully");
});

// read data from the file

fs.readFile("./santu/myBio.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log("data read succefully");

// delete data and the folder

fs.unlink("./santu/myBio.txt", (err) => {
  console.log("fileand data deleted");
});

// Delete the folder

fs.rmdir("santu", (err) => {
  console.log("delete folder");
});
