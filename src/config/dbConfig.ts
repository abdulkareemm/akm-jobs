import mongoose from "mongoose";

export function connectDB() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Mongoose connection successful");
    });

    connection.on("error", (error) => {
      console.log("Mongoose connection failed",error);
    });
  } catch (error) {
    console.log(error);
  }
}
