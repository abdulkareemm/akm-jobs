import { connectDB } from "@/config/dbConfig";
import { validateJWT } from "@/helpers/validateJWT";
import Application from "@/models/applicationModel";
import moment from "moment";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function PUT(request: NextRequest, { params }: any) {
  try {
    validateJWT(request);
    const reqBody = await request.json();
    const application: any = await Application.findByIdAndUpdate(
      params.applicationid,
      reqBody,
      {
        new: true,
        runValidators: true,
      }
    )
      .populate("user")
      .populate({
        path: "job",
        populate: {
          path: "user",
        },
      });

    

    return NextResponse.json({
      message: "Application updated successfully",
      data: application,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
