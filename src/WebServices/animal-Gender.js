var router=require('express').Router();

var animalGenderModel=require('../collections/animal_Gender');

// any url will start with /roles
router.get("/",function(request,respone){
    animalGenderModel.find({},{__v:0}).then(_result=>respone.json(_result));
});

router.post("/",function(request,respone){
    var _animalGender=new animalGenderModel(request.body);
    _animalGender.save().then(_result=>console.log(_result)).catch(
        error=>console.log(error)
    );
})


module.exports=router;