import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: [true, "please add a username"] },
    email: {
      type: String,
      required: [true, "please add an email"],
      unique: true,
    },
    password: { type: String, required: [true, "please add a password"] },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
