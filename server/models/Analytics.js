import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  uploadId: { type: mongoose.Schema.Types.ObjectId, ref: "Upload" },
  views: { type: Number, default: 0 },
  downloads: { type: Number, default: 0 },
  searchFrequency: { type: Number, default: 0 },
  timestamps: [{ type: Date }],
});

export default mongoose.model("Analytics", analyticsSchema);
