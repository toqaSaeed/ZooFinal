var router=require('express').Router();

var animalModel=require('../collections/animal_Class');

// any url will start with /roles
router.get("/",function(request,respone){
    animalModel.find({}).then(_result=>respone.json(_result));
});

router.post("/",function(request,respone){
    var _animalClass=new animalModel(request.body);
    _animalClass.save();
})


module.exports=router;