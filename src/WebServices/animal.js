var router = require('express').Router();

var animalModel = require('../collections/animal');


router.get("/:id", function (request, respone) {
    animalModel.findById(request.params.id, { __v: 0 })
        .populate(
        { path: 'animalType' }
        ).then(_result => respone.json(_result));
});

// any url will start with /animals
router.get("/", function (request, respone) {
    animalModel.aggregate([
        {
            $lookup:
            {
                from: "animal_types",
                localField: "animalType",
                foreignField: "_id",
                as: "hamada"
            }
        }
    ]).then(_result => respone.json(_result));
});




// router.get("/:id", function (request, respone) {
//     animalModel.find({}, { __v: 0 }).then(_result => respone.json(_result));
// });

router.post("/", function (request, respone) {
    var _animal = new animalModel(request.body);
    _animal.save();
})


module.exports = router;
