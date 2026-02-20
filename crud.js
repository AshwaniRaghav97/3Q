let http = require("http");
const fs = require("fs");

let path =  __dirname + "/abc.txt";
let server = http.createServer((req,res)=>{
    if(req.url == "/"){
        fs.readFile(path,(err,data)=>{  
            if(err){
                res.writeHead(404,{"Content-Type":"text/plain"});
                res.write("File not found");
                res.end();
            } else{
                res.writeHead(200,{"Content-Type":"text/plain"});
                res.write(data);
                res.end();
            }
        });
    } else if(req.url == "/create"){
        fs.writeFile(path,"This is a new file created by Node.js",(err)=>{
            if(err){  
                res.writeHead(500,{"Content-Type":"text/plain"});
                res.write("Error creating file");
                res.end();
            } else{
                res.writeHead(200,{"Content-Type":"text/plain"});
                res.write("File created successfully");
                res.end();
            } 
        });
    } else if(req.url == "/update"){
        fs.appendFile(path,"\nThis is an update to the file",(err)=>{
            if(err){
                res.writeHead(500,{"Content-Type":"text/plain"}); 
                res.write("Error updating file");
                res.end();
            } else{
                res.writeHead(200,{"Content-Type":"text/plain"});
                res.write("File updated successfully");
                res.end();
            }
        });
    } else if(req.url == "/delete"){    
        fs.unlink(path,(err)=>{
            if(err){
                res.writeHead(500,{"Content-Type":"text/plain"});
                res.write("Error deleting file");
                res.end();
            } else{
                res.writeHead(200,{"Content-Type":"text/plain"});
                res.write("File deleted successfully");
                res.end();
            }
        });
    } else{
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.write("Page not found");
        res.end();
    } 
});

server.listen(3000,()=>{
    console.log("Server is listening on port 3000");
});