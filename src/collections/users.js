var mongoose = require('mongoose');
var schema = mongoose.Schema;

var UserSchema = new schema({
    Name:{
        type:String,
        required:true,
        maxlength:100
    },

    Mail:{
        type:String,
        required:true,
        unique:true
    },

    Password:{
        type:String,
        required:true,
        minlength:8
    },
    Phones:[{
        type: Number
    }],

    role:{
        type: schema.Types.ObjectId,
        ref:'Role',
        required:true
    }
})

module.exports=mongoose.model('User',UserSchema)