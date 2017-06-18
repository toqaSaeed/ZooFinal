var mongoose = require('mongoose');
var schema = mongoose.Schema;

var ZoneSchema = new schema({
    Title: {
        type: String,
        required: true
    },
    Description: {
        type: String
    },
    Location: {
        Longitude: {
            type: Number,
            required: true
        },

        Latitude: {
            type: Number,
            required: true
        }
    },
    Image:{
        type:String,
        required:true
    },
    ZoneType:{
        type:schema.Types.ObjectId,
        ref:'Zone_Type',
        require:true
    }
})

module.exports=mongoose.model('Zone',ZoneSchema)