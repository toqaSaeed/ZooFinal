var mongoose = require('mongoose');
var schema = mongoose.Schema;

var FAQSchema = new schema({
    Question:{
        type:String,
        required:true,
        unique:true
    },
    Answer:{
        type:String,
        required:true,
        unique:true
    },
    FAQType:{
        type:schema.Types.ObjectId,
        ref:'FAQ_Type',
        require:true
    }
})

module.exports=mongoose.model('FAQ',FAQSchema)