var router=require('express').Router();

var perservesModel=require('../collections/preserves');

// any url will start with /users
router.get("/",function(request,respone){
    perservesModel.find({},{__v:0}).then(_result=>respone.json(_result));
});


router.post("/",function(request,respone){
    var _perserves =new perservesModel(request.body);
    _perserves.save();
});


module.exports=router;