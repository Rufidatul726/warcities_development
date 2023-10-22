import connectDB from "@dbConfig/db";
import { NextRequest, NextResponse } from "next/server";
import User from "@model/userModel";

connectDB();

export async function GET(request: NextRequest) {
    try{
        const users = await User.find();
        return NextResponse.json(users, {status: 200});

    }catch(error:any){
        return NextResponse.json({error: error.message}, {status: 500});

    }
}
