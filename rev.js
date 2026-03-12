const http = require("http");
const fs = require("fs");

let path = __dirname + "/abc.txt";
let server = http.createServer((req, res) => {
    fs.readFile(path,"utf-8",(error,data)=>{
        if(error) throw error;
        res.end(data);
    })
});


