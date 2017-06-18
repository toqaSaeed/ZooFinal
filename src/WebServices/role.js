var router=require('express').Router();

var roleModel=require('../collections/roles');

// any url will start with /roles
router.get("/",function(request,respone){
    roleModel.find({}).then(_result=>respone.json(_result));
});

router.post("/",function(request,respone){
    var _role=new roleModel(request.body);
    _role.save();
})


module.exports=router;