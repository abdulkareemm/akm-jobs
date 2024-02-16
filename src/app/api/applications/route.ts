import { connectDB } from "@/config/dbConfig";
import { validateJWT } from "@/helpers/validateJWT";
import Application from "@/models/applicationModel";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function POST(request: NextRequest) {
  try {
    await validateJWT(request);
    const reqBody = await request.json();
    const application: any = await Application.create(reqBody);

    const applicationData: any = await Application.findById(application._id)
      .populate("user","-password")
      .populate({
        path: "job",
        populate: {
          path: "user",
          select:"-password"
        },
      });

    return NextResponse.json({
      message: "You have successfully applied for this job",
      data: applicationData,
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    validateJWT(request);

    // fetch query string parameters
    const { searchParams } = new URL(request.url);
    const user = searchParams.get("user");
    const job = searchParams.get("job");

    const filtersObject: any = {};
    if (user) {
      filtersObject["user"] = user;
    }

    if (job) {
      filtersObject["job"] = job;
    }

    const applications = await Application.find(filtersObject)
      .populate("user","-password")
      .populate({
        path: "job",
        populate: {
          path: "user",
          select:"-password"
        },
      });
    return NextResponse.json({
      message: "Jobs fetched successfully",
      data: applications,
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
