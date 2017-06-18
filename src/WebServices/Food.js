var router=require('express').Router();

var FoodModel=require('../collections/Food');

// any url will start with /roles
router.get("/",function(request,respone){
    FoodModel.find({}).then(_result=>respone.json(_result));
});

router.post("/",function(request,respone){
    var _food=new FoodModel(request.body);
    _food.save();
})

module.exports=router;