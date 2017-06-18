var mongoose = require('mongoose');
var schema = mongoose.Schema;

var feedTypeSchema = new schema({
    Name:{
        type:String,
        required:true,
        unique:true
    },
    TypeNo:{
        type:Number,
        required:true,
        unique:true,

    }
})

module.exports=mongoose.model('Feedback_Type',feedTypeSchema)