var router=require('express').Router();

var animalTypeModel=require('../collections/animalType');

// any url will start with /roles
router.get("/",function(request,respone){
    animalTypeModel.find({},{__v:0}).then(_result=>respone.json(_result));
});

router.post("/",function(request,respone){
    var _animalType=new animalTypeModel(request.body);
    _animalType.save();
})


module.exports=router;