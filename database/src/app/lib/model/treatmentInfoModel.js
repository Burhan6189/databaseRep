import mongoose from "mongoose";

const myyModel = new mongoose.Schema({

    Description: String,
    Price: String,
    Clientid: String
});


export const treatmentModel= mongoose.models.treatment || mongoose.model('treatment',myyModel); 