const router = require("express").Router();
const Keeper = require("../Models/Keeper");

router.route("/").get(function(req,res){
    Keeper.find()
    .then((finalList) => res.json(finalList))
    .catch(() => res.json("Error occured!!"));
});

router.route("/add").post(function(req,res){

    // console.log(req.body);
    const KN = new Keeper({
        title: req.body.title,
        content: req.body.content
    });

    KN.save()
    .then(() => res.json("Note Added!!"))
    .catch(() => res.json("Error occured!!"));
});

router.route("/delete/:id").delete(function(req,res){
    const deleteId = req.params.id;
    
    Keeper.findByIdAndDelete(deleteId)
     .then(() => res.json("Note Deleted!!"))
     .catch(() => res.json("Error occured!!"));
});

module.exports = router;