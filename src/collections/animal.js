var mongoose = require('mongoose');
var schema = mongoose.Schema;

var AnimalSchema = new schema({
    NickName:{
        type:String
    },

    BirthDate:{
        type:Date,
    },

    Gender:{
        type:schema.Types.ObjectId,
        ref:'Animal_Gender'
    },

     Image:{
        type: String
    },
    animalType:{
        type:schema.Types.ObjectId,
        ref:'Animal_Type',
        required:true
    },
    zoo:{
        type:schema.Types.ObjectId,
        ref:'Zoo'
    },
    zone:{
        type:schema.Types.ObjectId,
        ref:'Zone',
        required:true
    }
})

module.exports=mongoose.model('Animal',AnimalSchema)