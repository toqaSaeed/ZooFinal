var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Asset_TypeSchema = new schema({
    Title:{
        type:String,
        required:true,
        unique:true
    },

    AssetNo:{
        type:Number,
        unique:true,
        min:1
    }
})

module.exports=mongoose.model('Asset_Type',Asset_TypeSchema)