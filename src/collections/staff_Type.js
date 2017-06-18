var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Staff_TypeSchema = new schema({
    Title:{
        type:String,
        required:true,
        unique:true
    }
})


module.exports=mongoose.model('staff_Type',Staff_TypeSchema)