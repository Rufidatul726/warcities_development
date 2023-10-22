import connectDB from "@dbConfig/db";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import User from "@model/userModel";
import sendMail from "@helpers/mailer";

connectDB();

export async function POST(request: NextRequest) {
    try{
        const reqBody = await request.json();
        const {name, email, phone, password} = reqBody;

        if(!name || !email || !phone || !password){
            return NextResponse.json({error: "Please fill all the fields"}, {status: 400});
        }

        const user = await User.findOne({email});

        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400});
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = await User.create({
            name,
            email,
            phone,
            password: hashedPassword
        });

        const savedUser = await newUser.save();

        const mailresponse = await sendMail(email, "VERIFY_EMAIL", savedUser._id);
        console.log(mailresponse);

        return NextResponse.json({message: "mail sent successfully, please check you mail to verify"}, {status: 200});

    }catch(error:any){
        return NextResponse.json({error: error.message}, {status: 500});

    }
}