var mongoose = require('mongoose');
var schema = mongoose.Schema;

var ZoneTypeSchema = new schema({
    Title: {
        type: String,
        required: true
    },
    TypeNo: {
        type: Number,
        required:true,
        unique:true,
        min:1
    }
})

module.exports=mongoose.model('Zone_Type',ZoneTypeSchema)