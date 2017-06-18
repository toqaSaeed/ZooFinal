var mongoose = require('mongoose');
var schema = mongoose.Schema;

var AssetSchema = new schema({
    Link: {
        type: String,
        required:true
    },
    AssetType:{
        type:schema.Types.ObjectId,
        ref:'Asset_Type',
        required:true
    },
    Zone:{
        type:schema.Types.ObjectId,
        ref:'Zone'
    },
    Animal_Type:{
        type:schema.Types.ObjectId,
        ref:'Animal_Type'
    }

})

module.exports = mongoose.model('Asset', AssetSchema)