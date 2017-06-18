var mongoose = require('mongoose');
var schema = mongoose.Schema;

var ServiceSchema = new schema({
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
    serviceType: {
        type: schema.Types.ObjectId,
        ref: 'Service_Type'
    },
    zoo:{
        type:schema.Types.ObjectId,
        ref:'Zoo',
        required:true
    }
})

module.exports=mongoose.model('Service',ServiceSchema)