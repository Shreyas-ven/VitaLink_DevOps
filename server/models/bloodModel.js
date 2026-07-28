const mongoose = require("mongoose");

const bloodSchema = new mongoose.Schema(

{

    bloodGroup:{
        type:String,
        required:true,
    },

    quantity:{
        type:Number,
        required:true,
    },

    expiryDate:{
        type:Date,
        required:true,
    },

    hospitalId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital",
        required:true,
    },

    status:{
        type:String,
        default:"Available",
    },

},

{
    timestamps:true,
}

);


module.exports = mongoose.model(
    "Blood",
    bloodSchema
);