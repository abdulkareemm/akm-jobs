import { connectDB } from "@/config/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import bcrypt from "bcryptjs"
connectDB();

export async function GET(request: NextRequest) {
  return NextResponse.json({
    messages: "users/register api accessed with post method",
  });
}
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    // check if user is already registered
    const user = await User.findOne({ email: reqBody.email });
    if (user) {
      throw new Error(`Already registered ${user.email}`);
    }
    // hash password 
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(reqBody.password, salt)
    reqBody.password = hashedPassword
    // create a new user
    await User.create(reqBody)
    return NextResponse.json({
        message:"User created successfully",
        success: true,
    })
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
