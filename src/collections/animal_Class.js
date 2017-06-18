var mongoose = require('mongoose');
var schema = mongoose.Schema;

var animalClassSchema = new schema({
    Name:{
        type:String,
        required:true,
        unique:true
    },
    ClassNo:{
        type:Number,
        required:true,
        min:1
    }
})

module.exports=mongoose.model('Animal_Class',animalClassSchema)