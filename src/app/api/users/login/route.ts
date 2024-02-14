import { connectDB } from "@/config/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
connectDB();


export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json();
        // check if user is registered
        const user = await User.findOne({ email: reqBody.email });
        if (!user) {
          throw new Error("User does not exist");
        }
        // check password is correct
        const match = await bcrypt.compare(reqBody.password, user.password);
        if (!match) {
            throw new Error("Credentials is incorrect");
        }
        //  create token
        const dataToBeSigned = {
            userId : user._id,
            email:user.email
        }
        const token = jwt.sign(dataToBeSigned,process.env.JWT_SECRET!,{
            expiresIn:'10d'
        })

        const response  = NextResponse.json({message:"Login successful"},{status:200})
        // set cookie
        response.cookies.set("token",token,{
            httpOnly:true,
            maxAge:60 * 60 * 24 * 10 * 1000,//10 days

        })
        
    } catch (error:any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
} 