import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
    },
    password: {
      type: "string",
      required: true,
    },
    isAdmin: {
      type: "boolean",
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// delete old one
const userModel = mongoose.model("user");
mongoose.deleteModel(userModel.modelName);

const User = mongoose.model("users", userSchema);
export default User;
