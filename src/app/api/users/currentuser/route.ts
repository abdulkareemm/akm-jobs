import { validateJWT } from "@/helpers/validateJWT";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request:NextRequest){
    try {
        const userId = await validateJWT(request)
        const user = await User.findById(userId).select("-password")
        if(!user){
            throw new Error("No user found")
        }

        return NextResponse.json({message:"User data fetched successfully",data:user})
        
    } catch (error:any) {
            return NextResponse.json({message:error.message},{status:500})
    }
}