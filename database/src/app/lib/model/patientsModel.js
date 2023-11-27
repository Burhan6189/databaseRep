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
    Clientid: { type: String, index: true, unique: true, required: true },
    Treatment:[ {
        Description: String,
        Price: String,
        Date: String,
        Time: String,
        Dentist: String,
        TotalPrice: String,
        LT: String,
        RT: String,
        LB: String,
        RB: String
    }]
});

mModel.plugin(mongooseUniqueValidator);
export const PatientModel = mongoose.models.patients || mongoose.model('patients', mModel); 
