var mongoose = require('mongoose');
var schema = mongoose.Schema;

var ServiceTypeSchema = new schema({
    Title: {
        type: String,
        required: true
    },
    ServiceNo: {
        type: Number,
        required:true,
        unique:true,
        min:1
    }
})

module.exports=mongoose.model('Service_Type',ServiceTypeSchema)