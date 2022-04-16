var express = require('express');
var cookiePaeser = require('cookie-parser');

var logger =  require('morgan');

var app = express();

//middleware

app.use(express.json());
app.use( express.urlencoded( { extended: false}) );
app.use(express.static(__dirname + "/public"));
app.use(logger('dev'));


app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})
//routes
app.get('/',(req,res)=>{
    res.send('Welcome')
});

app.get('/new',(req,res)=>{
    res.sendFile(__dirname + "/new.html");
});

app.listen(4001,() =>{
    console.log('server is running on port 4K')
})
