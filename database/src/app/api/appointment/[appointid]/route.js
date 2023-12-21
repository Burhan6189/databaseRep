import { DBcon } from "@/app/lib/dbconnection"
import { AppointModel } from "@/app/lib/model/appointmentModel";
import mongoose from "mongoose"
import { NextResponse } from "next/server";



export const PUT = async (request, content) => {

    await mongoose.connect(DBcon);
    const myid = content.params.appointid;
    const filter = { _id: myid };
    const payload = await request.json();
    const updatedata = await AppointModel.findOneAndUpdate(filter, payload);

    return NextResponse.json(updatedata);

}

export const DELETE = async (request, content) => {

    await mongoose.connect(DBcon);
    const ourid = content.params.appointid;
    const filter = { _id: ourid };
    const deletedata = await AppointModel.findOneAndDelete(filter);

}