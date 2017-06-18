var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Animal_TypeSchema = new schema({
    Name:{
        type:String,
        required:true,
        unique:true
    },

    BirthDate:{
        type:Date,
    },

    Reproduction:{
        type:String,
    },

    Behavior:{
        type:String
    },
    FeedingTime:[
        {
            type:Date
        }
    ],
    Order:{
        type:String
    },

     Image:{
        type: String
    },

    Description:{
        type:String,
        required:true
    },

    FamilyName:{
        type:String,
        required:true
    },

    ConserveStatus:{
        type:String
    },
    LifeSpan:{
        type:String
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
    animalClass:{
        type:schema.Types.ObjectId,
        ref:'Animal_Class',
        required:true
    },
    Habitat:{
        type:String
    },
    Origin:{
        type:String
    },
    Status:{
        type:String
    },
    Diet:{
        type:String
    },
    Size:{
        type:Number
    },
    Weight:{
        type:String
    },
    Age:{
        type:Number
    }
})

module.exports=mongoose.model('Animal_Type',Animal_TypeSchema)