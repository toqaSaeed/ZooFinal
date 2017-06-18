var router=require('express').Router();

var medicineModel=require('../collections/medicine');

// any url will start with /roles
router.get("/",function(request,respone){
    medicineModel.find({},{__v:0}).then(_result=>respone.json(_result));
});

router.post("/",function(request,respone){
    var _medicine=new medicineModel(request.body);
    _medicine.save();
})


module.exports=router;