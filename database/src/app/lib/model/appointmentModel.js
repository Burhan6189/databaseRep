const { default: mongoose } = require("mongoose");



const appmodel = new mongoose.Schema({

    Title : String,
    Description : String,
    Mydate : String,
    StartTime: String,
    EndTime: String,
    Type: String

});

export const AppointModel = mongoose.models.appointments || mongoose.model("appointments",appmodel);