import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const mModel = new mongoose.Schema({

    Name: String,
    Email: String,
    Number: String,
    Dateofbirth: String,
    Bloodgroup: String,
    Sex: String,
    Memberstatus: String,
    Dateofregistration: String,
    Clientid:  {type: String, index: true, unique: true, required: true }
});

mModel.plugin(mongooseUniqueValidator);
export const PatientModel= mongoose.models.patients || mongoose.model('patients',mModel); 
