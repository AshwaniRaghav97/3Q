let http=require("http");
let server = http.createServer((req,res)=>{
  console.log(req.abc);
  console.log(res.abc);
  res.write("Hello http module in Node.js !");
  res.end();
});

server.listen(3000,()=>{
    console.log("Server is listening on port 3000");
});