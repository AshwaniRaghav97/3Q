const express = require('express');
const app = express();


app.set('view engine','ejs');
let obj = {
    id : 1212
}
let student =[
    {
        name : 'John',
        age : 22
    },
    {
        name : 'Doe',
        age : 23
    },
    {
        name : 'Smith',
        age : 21
    }

];
app.get('/',(req,res)=>{
    res.render('index',{obj:obj,student:student});
});

app.get('/login',(req,res)=>{
    res.send('This is the login page')
});

app.get('/register',(req,res)=>{
    res.send('Register page');
});




app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});