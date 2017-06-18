var router=require('express').Router();

var animalModel=require('../collections/animal');

// any url will start with /animals
router.get("/",function(request,respone){
    animalModel.find({},{__v:0}).then(_result=>respone.json(_result));
});

router.post("/",function(request,respone){
    var _animal=new animalModel(request.body);
    _animal.save();
})


module.exports=router;