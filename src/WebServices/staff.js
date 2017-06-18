var router=require('express').Router();

var staffModel=require('../collections/staff');


router.get("/",function(request,response){
      staffModel.find({}).then(_result=> response.json(_result));
});


module.exports=router;