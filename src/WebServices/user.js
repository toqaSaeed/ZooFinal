var router=require('express').Router();

var userModel=require('../collections/users');

// any url will start with /users
router.get("/",function(request,respone){
    userModel.find({},{__v:0}).populate({
        path:'role',
        select:'Title'
    }).then(_result=>respone.json(_result));
});


router.post("/",function(request,respone){
    var _user=new userModel(request.body);
    _user.save();
});


module.exports=router;