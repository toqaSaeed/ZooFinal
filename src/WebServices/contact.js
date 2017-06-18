var router=require('express').Router();

var contactModel=require('../collections/contact');

// any url will start with /roles
router.get("/",function(request,respone){
    contactModel.find({},{__v:0})
    .populate({
        path:'zoo'
    })
    .then(_result=>respone.json(_result));
});

router.post("/",function(request,respone){
    var _contact=new contactModel(request.body);
    _contact.save();
})


module.exports=router;