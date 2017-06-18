var mongoose = require('mongoose');
var schema = mongoose.Schema;

var EqyptianPreserveSchema = new schema({
   ProtectedArea:{
       type:String,
       required:true,
       unique:true
   },
   DeclarationDate:{
       type:Number,
       required:true
   },
   Area:{
       type:Number,
       required:true
   },
   Governorate:{
       type:String,
       required:true
   },
   Image:{
       type:String
   }
})

module.exports = mongoose.model('Eqyptian-preserve', EqyptianPreserveSchema)