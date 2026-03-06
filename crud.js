// const {add} = require("./exp.js");
// console.log(add(5,10));

// const http = require("http");
// const server = http.createServer((req,res)=>{
//     if(req.url == "/"){
//         res.write("Welcome to the homepage");
//         res.end();
//     }
//         else if(req.url == "/about"){   
//         res.write("Welcome to the about page");
//         res.end();
//     }
//         else if(req.url == "/contact"){ 
//         res.write("Welcome to the contact page");
//         res.end();
//     }
//         else{   
//         res.write("Page not found");
//         res.end();
//     }
// })
// server.listen(3000,()=>{
//     console.log("Server is listening on port 3000");
// });

// let http = require("http");
// const fs = require("fs");

// let path =  __dirname + "/abc.txt";
// let server = http.createServer((req,res)=>{
//   let data = new Date() + " "+req.method;
//   fs.appendFile(path,data + "\n",(err)=>{
//     if(err) throw err;
//     console.log("Data has been written to file");
//   });
//   res.write("Hello World");
//   res.end();
// });

// server.listen(3000,()=>{
//     console.log("Server is listening on port 3000"); 
// });


// readfile using fs module

