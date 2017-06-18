var router=require('express').Router();

var assetTypeModel=require('../collections/asset_Type');

// any url will start with /roles
router.get("/",function(request,respone){
    assetTypeModel.find({},{__v:0}).then(_result=>respone.json(_result));
});

router.post("/",function(request,respone){
    var _assetType=new assetTypeModel(request.body);
    _assetType.save();
})


module.exports=router;