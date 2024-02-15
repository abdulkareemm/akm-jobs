import { connectDB } from "@/config/dbConfig";
import { validateJWT } from "@/helpers/validateJWT";
import Job from "@/models/jobModel";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function POST(request: NextRequest) {
  try {
    const userId = await validateJWT(request);
    const reqBody = await request.json();
    const job = await Job.create({ ...reqBody, user: userId });
    return NextResponse.json({
      message: "Job created successfully",
      data: job,
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
    const searchText = searchParams.get("searchText");
    const location = searchParams.get("location");

    const filtersObject: any = {};
    if (user) {
      filtersObject["user"] = user;
    }

    if (searchText && searchText !== "") {
      filtersObject["title"] = { $regex: searchText, $options: "i" };
    }

    if (location && location !== "") {
      filtersObject["location"] = { $regex: location, $options: "i" };
    }

    const jobs = await Job.find(filtersObject).populate("user", "-password");
    return NextResponse.json({
      message: "Jobs fetched successfully",
      data: jobs,
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
