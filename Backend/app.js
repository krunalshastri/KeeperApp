//jshint eversion:6

const express = require("express");
const cors = require("cors");
const dotEnv = require("dotenv").config();
const Keeper = require("./Models/Keeper");
const keeperRouter = require("./Routes/Keeper_route");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/keeperNotes",keeperRouter);

app.listen(5000,function(){
    console.log("Server is running on 5000!!");
});