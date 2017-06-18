var mongoose = require('mongoose');
var schema = mongoose.Schema;

var MedicineControlSchema = new schema({
    Time:[{
        type:Date
    }],
   Quantity:{
        type:Number,
        required:true
    },
   Duration:{
        type:Number,
        required:true
    },
    user:{
        type:schema.Types.ObjectId,
        ref:'User',
        required:true
    },
     animal:{
        type:schema.Types.ObjectId,
        ref:'Animal',
        required:true
    },
     medicine:{
        type:schema.Types.ObjectId,
        ref:'Medicine',
        required:true
    }
})

module.exports=mongoose.model('MedicineControl',MedicineControlSchema);