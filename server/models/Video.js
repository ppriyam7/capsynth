const mongoose = require("mongoose");
const entitySchema = new mongoose.Schema({
  name: String,
  type: String,
  confidence: Number,
});
const Videoschema = new mongoose.Schema({
  filename: String,
  uploadTime: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["processing", "done", "failed"],
    default: "processing",
  },
  captions: String,
  description: String,
  entitites: [entitySchema],
  embedding: {
    type: [Number],
    index: true,
  },
});
module.exports = mongoose.model("Video", Videoschema);
