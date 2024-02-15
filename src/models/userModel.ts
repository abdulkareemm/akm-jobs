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
    // additional fields for employee
    skills: {
      type: [],
      required: false,
    },
    experience: {
      type: [],
      required: false,
    },
    education: {
      type: [],
      required: false,
    },
    carrierObjective: {
      type: String,
      required: false,
    }, // additional fields for employer
    establishmentYear: {
      type: String,
      required: false,
    },
    companySize: {
      type: String,
      required: false,
    },
    website: {
      type: String,
      required: false,
    },
    about: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// delete old one
if (mongoose.models.users) {
  const userModel = mongoose.model("users");
  mongoose.deleteModel(userModel.modelName);
}

const User = mongoose.model("users", userSchema);
export default User;
