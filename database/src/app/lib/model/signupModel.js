import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const myModel = new mongoose.Schema({

    Username: {type: String, index: true, unique: true, required: true },
    Email: String,
    Password: String,
    Role: String
});

myModel.plugin(mongooseUniqueValidator);
export const snupModel= mongoose.models.Signup || mongoose.model('Signup',myModel); 
