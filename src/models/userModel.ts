import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: "string",
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    userType: {
      type: String,
      required: true,
      default: "employee",
    },
  },
  {
    timestamps: true,
  }
);

// delete old one
if(mongoose.models.users){
  const userModel = mongoose.model("users");
  mongoose.deleteModel(userModel.modelName);
}


const User = mongoose.model("users", userSchema);
export default User;
