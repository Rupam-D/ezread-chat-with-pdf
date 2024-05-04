import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    text: String,
    user: {
      type: String,
      ref: "User",
      required: true,
    },
    file: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "File",
      required: true,
    },
    isUserMessage: Boolean,
  },
  { timestamps: true }
);

export const Message =
  mongoose.models.Message || mongoose.model("Message", messageSchema);
