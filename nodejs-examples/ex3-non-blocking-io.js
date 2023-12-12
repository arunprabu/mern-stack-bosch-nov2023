const fs = require('fs');

console.log('1. Program Started');

// reading file async'ly a.k.a non-blocking I/O
fs.readFile('./sample.mp4', (err, data) => { // error first callback
  if(!err){
    console.log(data.toString());
  } else {
    console.log(err);
  }
});

console.log("2. Program Ended");