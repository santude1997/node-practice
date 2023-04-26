const fs = require("fs");

fs.writeFile(
  "read.txt",
  "This is an example of Asynchochonous file system example",
  (err) => {
    console.log("file is create");
    console.log(err)
  }
);

// added some data in the same file

fs.appendFile(
  "read.txt",
  "I focus to be a MEAN and MERN stack developer",
  (err) => {
    console.log("data added successfully");
    console.log(err);
  }
);

// Read data from the file

fs.readFile("read.txt", "utf-8", (err, data) => {
  console.log(data);
});
