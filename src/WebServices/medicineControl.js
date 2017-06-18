var router=require('express').Router();

var medicineControlModel=require('../collections/medicineControl');

// any url will start with /roles
router.get("/",function(request,respone){
    medicineControlModel.find({},{__v:0}).then(_result=>respone.json(_result));
});

router.post("/",function(request,respone){
    var _medicineControl=new medicineControlModel(request.body);
    _medicineControl.save();
})


module.exports=router;