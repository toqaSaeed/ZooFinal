var mongoose = require('mongoose');
var schema = mongoose.Schema;

var FeedingControlSchema = new schema({
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
     animal_Type:{
        type:schema.Types.ObjectId,
        ref:'Animal_Type',
        required:true
    },
     food:{
        type:schema.Types.ObjectId,
        ref:'Food',
        required:true
    }
})

module.exports=mongoose.model('FeedingControl',FeedingControlSchema);