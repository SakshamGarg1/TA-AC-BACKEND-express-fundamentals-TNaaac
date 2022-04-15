var express = require('express');
var cookirParser = require('cookie-parser')
var logger = require('morgan')

var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.use(cookirParser()); 
app.use(logger('tiny'));


app.use((req,res,next)=>{
    console.log(req.cookies);
    next()
})

app.use("/about",(req,res,next)=>{
    res.cookie("username", "suraj");
    res.end('About Page');
    next()
})




app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html")
});

app.listen(4000,()=>{
    console.log('server is working on a poet 4K')
})

