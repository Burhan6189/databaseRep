import mongoose from "mongoose";


const myModel = new mongoose.Schema({

    Username: String,
    Email: String,
    Password: String
});

export const snupModel= mongoose.models.Signup || mongoose.model('Signup',myModel); 