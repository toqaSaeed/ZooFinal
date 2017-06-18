var router=require('express').Router();

var zoneTypeModel=require('../collections/zoneType');

// any url will start with /roles
router.get("/",function(request,respone){
    zoneTypeModel.find({}).select({"__v":0}).then(_result=>respone.json(_result));
});

router.post("/",function(request,respone){
    var _zoneType=new zoneTypeModel(request.body);
    _zoneType.save();
})


module.exports=router;