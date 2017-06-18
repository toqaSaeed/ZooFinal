var router=require('express').Router();

var newsModel=require('../collections/news');


// any url will start with /roles
router.get("/",function(request,respone){
    newsModel.find({}).then(_result=>respone.json(_result));
});

router.post("/",function(request,respone){
    var _news=new newsModel(request.body);
    _news.save();
})


module.exports=router;