const path = require("path");

// find the diractory name by using node path-module
console.log(path.dirname("D:/node-practice/path-module/path-module.js"));

// find the extension name using node path-module
console.log(path.extname("D:/node-practice/path-module/path-module.js"));

// find the base name using node path-module
console.log(path.basename("D:/node-practice/path-module/path-module.js"));

// find the path detels by using parse

const myPath = path.parse("D:/node-practice/path-module/path-module.js");
console.log(myPath);
console.log("---------------------------------------");
console.log(myPath.root);
console.log(myPath.dir);
console.log(myPath.base);
console.log(myPath.ext);
console.log(myPath.name);
console.log("---------------------------------------");
