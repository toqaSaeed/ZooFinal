var router=require('express').Router();

var FeedingControlModel=require('../collections/FeedingControl');

// any url will start with /roles
router.get("/",function(request,respone){
    FeedingControlModel.find({}).populate({
        path:'user'
    }).populate({
        path:'animal_Type'
    }).populate({
        path:'food'
    }).then(_result=>respone.json(_result));
});

router.post("/",function(request,respone){
    var _feeding=new FeedingControlModel(request.body);
    _feeding.save();
})

module.exports=router;