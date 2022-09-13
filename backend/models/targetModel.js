import mongoose from "mongoose";

const targetSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "please add a text value"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Target", targetSchema);
