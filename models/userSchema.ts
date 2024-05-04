import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      trim: true,
    },
    // allFiles: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "File",
    //   },
    // ],
    // messages: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Message",
    //   },
    // ],
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
