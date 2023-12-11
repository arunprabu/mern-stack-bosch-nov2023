// Access File System
const fs = require('fs'); // CommonJS import
// import fs from 'fs'; // ESM Import -- RECOMMENDED

console.log('Program Started');
// Blocking I/O a.k.a Synchronous I/O
// Reading the file named sample.txt from my computer using js
const data = fs.readFileSync('./sample.txt'); 
console.log(data.toString());

// the following line will be executed only after the entire file is read
console.log("Program Ended");