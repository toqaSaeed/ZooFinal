var mongoose = require('mongoose');
var schema = mongoose.Schema;

var FAQTypeSchema = new schema({
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
    }
})

module.exports=mongoose.model('FAQ_Type',FAQTypeSchema)