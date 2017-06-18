var router=require('express').Router();

var feedbackTypeModel=require('../collections/feedback_Type');

// any url will start with /roles
router.get("/",function(request,respone){
    feedbackTypeModel.find({}).then(_result=>respone.json(_result));
});

router.post("/",function(request,respone){
    var _feedbackType=new feedbackTypeModel(request.body);
    _feedbackType.save();
})

module.exports=router;