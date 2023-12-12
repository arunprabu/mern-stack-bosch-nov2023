const path = require('path');

const fileName = __filename;  // file name with the directory
console.log(fileName);

// if you want only the file name not the directory
const exactFileName = path.basename(fileName); //
console.log(exactFileName);

// if you want to get only the file extension
const fileExtn = path.extname(fileName);
console.log(fileExtn);