var router=require('express').Router();
// the schema of the zoo
var ticketsModel=require('../collections/ticket');

// functions 
// All the url starts with /tickets
router.get("/",function(request,response){
      ticketsModel.find({}).populate({
          path:'zoo'
      }).then(_result=> response.json(_result));
});



router.post("/",function(request,response){
      var _tickets=new ticketsModel(request.body);
      _tickets.save();
});


module.exports=router;