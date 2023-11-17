import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const myModel = new mongoose.Schema({

    Username: String,
    Email:  {type: String, index: true, unique: true, required: true },
    Password: String
});

myModel.plugin(mongooseUniqueValidator);
export const snupModel= mongoose.models.Signup || mongoose.model('Signup',myModel); 
