const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/ash',(req,res)=>{
    res.render('ash');
    res.end();
}).listen(3000,()=>{
    console.log('Server is running on port 3000');
});