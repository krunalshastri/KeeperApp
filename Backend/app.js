//jshint eversion:6

const express = require("express");
const cors = require("cors");
const dotEnv = require("dotenv").config();
const Keeper = require("./Models/Keeper");
const keeperRouter = require("./Routes/Keeper_route");

const app = express();
app.use(express.json());
app.use(cors());

if(process.env.NODE_ENV === "production"){
    app.use(express.static("Frontend/build"));
}

app.use("/keeperNotes",keeperRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT,function(){
    console.log(`Server is running at ${PORT}!!`);
});