const mongoose = require("mongoose");
const Videoschema = new mongoose.Schema({
  filename: String,
  uploadTime: { type: Date, default: Date.now },
  status: String,
  captions: String,
  embedding: {
    type: [Number],
    index: true,
  },
});
module.exports = mongoose.model("Video", Videoschema);
