var router=require('express').Router();

var componentTypeModel=require('../collections/component_Type');

// any url will start with /roles
router.get("/",function(request,respone){
    componentTypeModel.find({},{__v:0}).then(_result=>respone.json(_result));
});

router.post("/",function(request,respone){
    var _assetType=new componentTypeModel(request.body);
    _assetType.save();
})


module.exports=router;