var mongoose = require('mongoose');
var schema = mongoose.Schema;

var CompTypeSchema = new schema({
    Name:{
        type:String,
        required:true,
        unique:true
    },
    TypeNo:{
        type:Number,
        required:true,
        unique:true,
        min:1
    },
    Image:{
        type:String
    }
})

module.exports=mongoose.model('Component_Type',CompTypeSchema)