var mongoose = require('mongoose');
var schema = mongoose.Schema;

var NewsSchema = new schema({
    Title:{
        type:String,
        required:true
    },

    Description:{
        type:String,
        required:true
    },

    CreatedAt:{
        type:Date,
        required:true
    },

    Expire_Date:{
        type:Date
    },

//mmkn tb2a buffer
    Image:{
        type:String,
    },
     user:{
        type: schema.Types.ObjectId,
        ref:'User'

    },
    zoo:{
        type:schema.Types.ObjectId,
        ref:'Zoo'
    }
})

module.exports=mongoose.model('news',NewsSchema)