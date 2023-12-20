import { DBcon } from "@/app/lib/dbconnection"
import { AppointModel } from "@/app/lib/model/appointmentModel";
import mongoose from "mongoose"
import { NextResponse } from "next/server";


export const GET = async ()=>{

await mongoose.connect(DBcon);

const data = await AppointModel.find();

return NextResponse.json(data);

}


export const POST = async (request)=>{

    await mongoose.connect(DBcon);
    const payload = await request.json();
    const data = new AppointModel(payload);

    const saveddata= data.save();

    return NextResponse.json(saveddata);

}