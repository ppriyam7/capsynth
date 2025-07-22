import mongoose from "mongoose";

const uploadSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  filename: { type: String, required: true },
  fileType: { type: String, enum: ["video", "audio"], required: true },
  uploadDate: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["processing", "completed", "failed"],
    default: "processing",
  },
});

export default mongoose.model("Upload", uploadSchema);
