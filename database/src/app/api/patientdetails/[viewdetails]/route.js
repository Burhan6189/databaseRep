import { DBcon } from "@/app/lib/dbconnection";
import { PatientModel } from "@/app/lib/model/patientsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, content) {

    await mongoose.connect(DBcon);
    const clientid = content.params.viewdetails;
    const filter = {_id:clientid};
    const payload = await request.json();
    const data = await PatientModel.findOneAndUpdate(filter, payload);


    return NextResponse.json(data)
}


export async function GET(request, content) {

    await mongoose.connect(DBcon);
    const clientid = content.params.viewdetails;
    const filter = {_id:clientid};

    const mydata = await PatientModel.findById(filter);


    return NextResponse.json(mydata)
}