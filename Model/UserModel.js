import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
 Name: {
    Type:String,
    // require:true,
 },
 Password:{
    Type: String,
    // require: true,
 },
 role:{
    Type: String,
// require: true,
 }
});

export  default  mongoose.model("user", userSchema,"user");