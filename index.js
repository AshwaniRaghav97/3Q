const express = require('express');
const app = express();


app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/login',(req,res)=>{
    res.send('This is the login page')
});

app.get('/register',(req,res)=>{
    res.send('This is the register page');
});




app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});