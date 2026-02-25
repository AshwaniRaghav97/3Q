let http = require("http");
const fs = require("fs");

let path =  __dirname + "/abc.txt";
let server = http.createServer((req,res)=>{
  let data = new Date() + " "+req.method;
  fs.appendFile(path,data + "\n",(err)=>{
    if(err) throw err;
    console.log("Data has been written to file");
  });
  res.write("Hello World");
  res.end();
});

// server.listen(3000,()=>{
//     console.log("Server is listening on port 3000"); 
// });