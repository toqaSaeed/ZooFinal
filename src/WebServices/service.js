var router=require('express').Router();

var serviceModel=require('../collections/service');

// any url will start with /users
router.get("/",function(request,respone){
    serviceModel.find({},{__v:0}).then(_result=>respone.json(_result));
});


router.post("/",function(request,respone){
    var _serivce=new serviceModel(request.body);
    _serivce.save();
});


module.exports=router;