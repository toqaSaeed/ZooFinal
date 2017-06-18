var mongoose = require('mongoose');
var schema = mongoose.Schema;

var feedbackSchema = new schema({
    Message:{
        type:String,
        required:true
    },

    Subject:{
        type:String,
        required:true
    },
     feedbackType:{
        type: schema.Types.ObjectId,
        ref:'Feedback_Type',
        required:true
    },

    user:{
        type: schema.Types.ObjectId,
        ref:'User'
    }
})

module.exports=mongoose.model('Feedback',feedbackSchema)