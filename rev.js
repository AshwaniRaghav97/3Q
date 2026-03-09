const http = require("http");
const fs = require("fs");

let path = __dirname + "/abc.txt";
let server = http.createServer((req, res) => {
    fs.readFile(path,"utf-8",(error,data)=>{
        if(error) throw error;
        res.end(data);
    })
}).listen(3000,()=>{
    console.log("Server is running on port 3000");
});


