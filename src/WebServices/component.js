var router=require('express').Router();

var componentModel=require('../collections/component');

// any url will start with /roles
router.get("/",function(request,respone){
    componentModel.aggregate([{
        $lookup:{
            from:"component_types",
            localField:"compType",
            foreignField:"_id",
            as:"compDetails"
        }
    }]).then(_result=>respone.json(_result));
});

router.post("/",function(request,respone){
    var _component=new componentModel(request.body);
    _component.save();
})


module.exports=router;