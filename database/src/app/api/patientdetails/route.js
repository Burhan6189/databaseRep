import { DBcon } from "@/app/lib/dbconnection";
import { PatientModel } from "@/app/lib/model/patientsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){

    await mongoose.connect(DBcon);
    const data = await PatientModel.find();

    return NextResponse.json(data);
}

export async function POST(request){

    await mongoose.connect(DBcon);
    const reqData= await request.json();
    const mydata= new PatientModel(reqData);
    const data = mydata.save();

    return NextResponse.json(data);
}