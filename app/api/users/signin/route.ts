import connectDB from "@dbConfig/db";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import User from "@model/userModel";
import jwt from "jsonwebtoken";

connectDB();

export async function POST(request: NextRequest) {
    try{
        const reqBody = await request.json();
        const {email, password} = reqBody;

        if(!email || !password){
            return NextResponse.json({error: "Please fill all the fields"}, {status: 400});
        }
    
        const user = await User.findOne({email});

        if(!user){
            return NextResponse.json({error: "User does not exists"}, {status: 400});
        }

        const isMatch = await bcryptjs.compare(password, user.password);

        if(!isMatch){
            return NextResponse.json({error: "Invalid credentials"}, {status: 400});
        }

        const tokenData = {
            id: user._id,
            name: user.name,
            email: user.email
        }

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"});

        const response = NextResponse.json({
            message: "Login successful",
            token
        }, {status: 200});
        response.cookies.set("token", token, {httpOnly: true});

        return response;

    }catch(error:any){
        return NextResponse.json({error: error.message}, {status: 500});
    }
}