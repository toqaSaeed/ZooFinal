var router=require('express').Router();
// the schema of the zoo
var zooModel=require('../collections/zoo');

// functions 
// All the url starts with /zoos
router.get("/",function(request,response){
      zooModel.find({}).then(_result=> response.json(_result));
});


router.post("/",function(request,response){
      var _zoo=new zooModel(request.body);
      _zoo.save();
});


module.exports=router;