var router=require('express').Router();

var faqTypeModel=require('../collections/FAQ_Type');

// any url will start with /roles
router.get("/",function(request,respone){
    faqTypeModel.find({}).then(_result=>respone.json(_result));
});

router.post("/",function(request,respone){
    var _faqType=new faqTypeModel(request.body);
    _faqType.save();
})

module.exports=router;