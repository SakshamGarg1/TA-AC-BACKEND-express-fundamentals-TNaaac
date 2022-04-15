var express = require("express");

var  app = express();
 
app.use((req,res,next)=>{
console.log(req.method,res.url);
next()
})

app.get('/',(req,res)=>{
    res.send('welcome to express');
})

app.listen(4000,()=>{
    console.log('server is listening on port 3000')
})
