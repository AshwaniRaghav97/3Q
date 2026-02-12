let http=require("http");
let server = http.createServer((req,res)=>{
  res.write("Hello World");
  res.end();
});

server.listen(3000,()=>{
    console.log("Server is listening on port 3000"); 
});








