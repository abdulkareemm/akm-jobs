import { connectDB } from "@/config/dbConfig";
import { validateJWT } from "@/helpers/validateJWT";
import Application from "@/models/applicationModel";
import moment from "moment";
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helpers/sendEmail";

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
          select:"-password"
        },
      });

    await sendEmail({
      to: application.user.email,
      subject: "Your application status has been updated",
      text: `Your application status has been updated to ${application.status}`,
      html: `<div>
      <p>Your application status has been updated to ${application.status}</p>
     
      <p>
       Company: ${application.job.user.name}
      </p>
    
      <p>
        Job Title: ${application.job.title}
      </p>
   
      <p>
        Applied On: ${moment(application.createdAt).format("DD/MM/YYYY")}
      </p>
   
      <p>Thank you for using AKMJobs</p>
      </div>`,
    });

    return NextResponse.json({
      message: "Application updated successfully",
      data: application,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
