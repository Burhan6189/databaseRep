import mongoose from "mongoose";

const myyModel = new mongoose.Schema({

    Description: String,
    Price: String,
    Clientid: String,
    Date: String,
    Time: String,
    Dentist: String,
    TotalPrice: String,
    LT: String,
    RT: String,
    LB: String,
    RB: String
});


export const treatmentModel = mongoose.models.treatment || mongoose.model('treatment', myyModel); 