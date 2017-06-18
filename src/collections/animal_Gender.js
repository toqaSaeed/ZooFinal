var mongoose = require('mongoose');
var schema = mongoose.Schema;

var GenderSchema = new schema({
    Name:{
        type:String,
        required:true
    },

    Num:{
        type:Number,
        min:1,
        Max:2
    }
    
})

module.exports=mongoose.model('Animal_Gender',GenderSchema)