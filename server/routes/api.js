const {
  uploadVideo,
  getCaptions,
  searchCaptions,
} = require("../controllers/videoController");
exports.handleUpload = uploadVideo;
exports.getCaptions = getCaptions;
exports.searchCaptions = searchCaptions;
