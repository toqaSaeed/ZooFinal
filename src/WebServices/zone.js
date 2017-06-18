var router=require('express').Router();
// the schema of the zoo
var zoneModel=require('../collections/zone');

// functions 
// All the url starts with /zones
router.get("/",function(request,response){
      zoneModel.find({}).populate('ZoneType',{__v:0})
      .then(_result=> {response.json(_result)});
});


router.post("/",function(request,response){
      var _zone=new zoneModel(request.body);
      _zone.save();
});


module.exports=router;