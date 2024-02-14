import { NextRequest, NextResponse } from "next/server";


export async function POST( request: NextRequest){
    try {
        const response = NextResponse.json({message : "Logout Sucessfully"},{status : 200})
        response.cookies.set("token","",{maxAge :0})
        return response
    } catch (error : any) {
        return NextResponse.json({ message: error.message });
    }
}