var router=require('express').Router();

var faqModel=require('../collections/FAQ');

// any url will start with /roles
router.get("/",function(request,respone){
    faqModel.find({},{__v:0,_id:0}).populate('FAQType',{_id:0,__v:0}).then(_result=>respone.json(_result));
});

router.post("/",function(request,respone){
    var _faq=new faqModel(request.body);
    _faq.save();
})


module.exports=router;