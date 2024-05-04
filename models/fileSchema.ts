import mongoose from "mongoose";
const fileSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
      unique: true,
    },
    key: {
      type: String,
      required: true,
      unique: true,
    },
    pineconeUploadStatus: {
      type: String,
      enum: ["PENDING", "PROCESSING", "SUCCESS", "FAILED"],
      default: "PENDING",
    },
    user: {
      type: String,
      ref: "User",
      required: true,
    },
    // messages: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Message",
    //   },
    // ],
  },
  { timestamps: true }
);

export const File = mongoose.models.File || mongoose.model("File", fileSchema);
