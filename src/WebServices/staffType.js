var router=require('express').Router();

var StaffTypeModel=require('../collections/staff_Type');

// any url will start with /roles
router.get("/",function(request,respone){
    StaffTypeModel.find({}).then(_result=>respone.json(_result));
});



module.exports=router;