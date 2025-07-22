import mongoose from "mongoose";

const captionSchema = new mongoose.Schema({
  uploadId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Upload",
    required: true,
  },
  language: { type: String, default: "en" },
  captionText: { type: String, required: true },
  duration: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Caption", captionSchema);
