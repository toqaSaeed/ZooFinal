var router=require('express').Router();

var assetModel=require('../collections/assets');

// any url will start with /roles
router.get("/",function(request,respone){
    assetModel.find({},{__v:0}).populate({
        path:'AssetType'
    })
    .populate({
        path:'Zone'
    }).populate({path:'Animal_Type'}).then(_result=>respone.json(_result));
});

router.post("/",function(request,respone){
    var _asset=new assetModel(request.body);
    _asset.save();
})


module.exports=router;