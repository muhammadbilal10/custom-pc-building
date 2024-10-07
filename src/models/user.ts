import mongoose, { Model } from "mongoose";
import { Document } from "mongoose";

export interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<UserDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    // created at and updated at
    timestamps: true,
  }
);

const User: Model<UserDocument> =
  mongoose.models?.User || mongoose.model("User", userSchema);

export default User;
