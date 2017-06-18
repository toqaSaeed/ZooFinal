var router=require('express').Router();

var feedbackModel=require('../collections/feedback');
var feedbacktype=require('../collections/feedback_Type');


// any url will start with /roles
router.get("/",function(request,respone){
    feedbackModel.find({}).populate({
        path:'feedbackType'
    }).then(_result=>respone.json(_result));
});

router.post("/",function(request,respone){
    var value=parseInt(request.body.feedbackType);
    feedbacktype.find({TypeNo:value}).then(
      _result=>{
          var _id=_result[0]._id;
          var feedback={
           Subject:request.body.Subject,
           Message:request.body.Message,
           feedbackType:_id
          }
        var _feedback=new feedbackModel(feedback);
        _feedback.save();
      }
    )
})

module.exports=router;