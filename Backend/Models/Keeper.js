const mongoose = require("mongoose");

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

module.exports = Keeper;