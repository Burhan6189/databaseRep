import { DBcon } from "@/app/lib/dbconnection";
import { treatmentModel } from "@/app/lib/model/treatmentInfoModel";

import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET(){

    await mongoose.connect(DBcon);
    const data = await treatmentModel.find();
    return NextResponse.json(data);

}

export async function POST(request){

    await mongoose.connect(DBcon);
    const reqData= await request.json();
    const mydata= new treatmentModel(reqData);
    const data = mydata.save();

    return NextResponse.json(data);
}