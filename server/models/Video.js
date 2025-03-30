const mongoose = require("mongoose");
const Videoschema = new mongoose.Schema({
  filename: String,
  uploadTime: new Date(),
  status: String,
  captions: String,
});
module.exports = mongoose.model("Video", Videoschema);
