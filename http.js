let http=require("http");
let server = http.createServer((req,res)=>{
  res.write("Hello http module in Node.js !");
  res.end();
}).listen(3000);

// server.listen(3000,()=>{
//     console.log("Server is listening on port 3000");
// });