//jshint eversion:6

const express = require("express");
const bodyParser = require("body-parser");
const dotEnv = require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//Connect the mongoose
mongoose.connect(process.env.ATLAS_URL, { useNewUrlParser: true, useUnifiedTopology: true });

//Schema 
const keeperSchema = mongoose.Schema(
    {
        title:{type:String,required:true},
        desc:{type:String}
    }
);

//Model
const Keeper = mongoose.model("keepernotes",keeperSchema);

app.get("/" , function(req,res){
    Keeper.find()
    .then((finalList) => res.json(finalList))
    .catch(() => res.json("Error occured!!"));
});

app.post("/",function(req,res){
    console.log(req.body);
    
    const KN = new Keeper({
        title: req.body.title,
        desc: req.body.desc
    });

    KN.save()
    .then(() => res.json("Note Added!!"))
    .catch(() => res.json("Error occured!!"));
});

app.listen(5000,function(){
    console.log("Server is running on 5000!!");
});