const router = require("express").Router();
const Keeper = require("../Models/Keeper");

router.route("/").get(function(req,res){
    Keeper.find()
    .then((finalList) => res.json(finalList))
    .catch(() => res.json("Error occured!!"));
});

router.route("/add").post(function(req,res){
    const KN = new Keeper({
        title: req.body.title,
        desc: req.body.desc
    });

    KN.save()
    .then(() => res.json("Note Added!!"))
    .catch(() => res.json("Error occured!!"));
});

router.route("/delete/:id").delete(function(req,res){
    const deleteId = req.params.id;
    
    Keeper.findByIdAndDelete(deleteId)
     .then((finalList) => res.json("Note Deleted!!"))
     .catch(() => res.json("Error occured!!"));
});

module.exports = router;