var express = require('express');

var logger = require( 'morgan' );
var app = express();
app.use(logger( 'dev' ));

app.use('/admin',(req,res,next)=>{
    next('Unauthorised to access')
})

app.get('/',(req,res)=>{
    res.send("welcome")
});

app.get('/about',(req,res)=>{
    res.send("About Page")
});


//404 error
app.use((req,res,next)=>{
    res.send('Page Not Found');
});

//custom error
app.use((err,req,res,next)=>{
    res.status(500).send(err);
})


app.listen(3000, ()=>{
    console.log('server listening to port 3k'); 
})
