// Some properties that you can avail from global
console.log(`Directory Name: ${__dirname}`); // full path -- absolute path

console.log(`File Name: ${__filename}`); // filename with directory

console.log(process.argv); 
// try this cmd in cmd prompt to see argv 
// node ex7-global-obj.js --name='arun' --email='a@b.com' --phone=12121312

console.log(`Current Working Directory: ${process.cwd()}`); 