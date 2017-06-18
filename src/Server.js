var express=require('express');
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/ZooDatabase');
var routes=require('./WebServices/index');
var bodyparser=require('body-parser');


// fire the function express 

var app=express();
app.use(bodyparser.json());
app.use(routes);




app.listen(3000,function(){
console.log("server is working on port 3000")
});