var router=require('express').Router();

var serviceTypeModel=require('../collections/serviceType');

// any url will start with /roles
router.get("/",function(request,respone){
    serviceTypeModel.find({}).select({"__v":0}).then(_result=>respone.json(_result));
});

router.post("/",function(request,respone){
    var _serviceType=new serviceTypeModel(request.body);
    _serviceType.save();
})


module.exports=router;