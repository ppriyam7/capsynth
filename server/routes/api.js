const {
  uploadVideo,
  getCaptions,
  searchCaptions,
} = require("../controller/videoController");
exports.handleUpload = uploadVideo;
exports.getCaptions = getCaptions;
exports.searchCaptions = searchCaptions;
