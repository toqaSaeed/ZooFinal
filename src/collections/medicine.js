var mongoose = require('mongoose');
var schema = mongoose.Schema;

var MedicineSchema = new schema({
    Name:{
        type:String,
        required:true,
        unique:true
    },

    Quantity:{
        type:Number
    },
   Price:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model('Medicine',MedicineSchema);