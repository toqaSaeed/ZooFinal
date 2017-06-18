var mongoose = require('mongoose');
var schema = mongoose.Schema;

var ContactSchema = new schema({
    Phone: [{
        type: Number
    }],
    Email: [{
        type: String
    }],

    Fax: [{
        type:Number
    }],
    Address: [{
        type: String
    }],
    PostalCode: [{
        type: Number
    }],
    Url:[{
        type:String
    }],
    zoo:{
        type:schema.Types.ObjectId,
        ref:'Zoo'
    }
})

module.exports = mongoose.model('Contact', ContactSchema)