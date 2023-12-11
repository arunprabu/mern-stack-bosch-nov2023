// Let's write file into our file system
const fs = require('fs');

// keeping sample content in a variable
const content = 'NodeJs has created this file.';

console.log('1. File Writing is going to be started');

// Writing file async'ly 
fs.writeFile("hello.txt", content, (err) => {
  if(!err){
    console.log("File Writing Successful!");
  } else {
    console.log(err);
  }
});

console.log('2. Program Ended');
