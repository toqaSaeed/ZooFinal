var mongoose = require('mongoose');
var schema = mongoose.Schema;

var ZooSchema = new schema({
    Title:{
        type:String,
        required:true
    },

    Description:{
        type:String,
        required:true
    },

    Link:{
        type:String
    },

    OpeningTime:{
        type:Date,
        required:true
    },

    ClosedTime:{
        type:Date,
        required:true
    },
    offDay:{
        type:String,
        required:true
    },

    SeasonStartDate:{
        type:Date
    },

    SeasonEndDate:{
        type:Date
    },

Location:{
    Longitude:{
        type:Number,
        required:true
    },

    Latitude:{
        type:Number,
        required:true
    }
},
Image:{
    type:String,
    required:true
}
})

module.exports=mongoose.model('Zoo',ZooSchema)