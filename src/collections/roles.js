var mongoose = require('mongoose');
var schema = mongoose.Schema;

var RoleSchema = new schema({
    Title:{
        type:String,
        required:true,
        unique:true
    },
    roleNo:{
        type:Number,
        required:true,
        unique:true,
        min:1,
        max:4
    }
})

module.exports=mongoose.model('Role',RoleSchema)