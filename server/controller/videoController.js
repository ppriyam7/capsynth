const Video = require("../models/Video");
const { runPythonScript } = require("../routes/pythonservice");

exports.uploadVideo = async (req, res, next) => {
  try {
    if (!req.field) throw new Error("No file uploaded!");
    const video = new Video({
      fileName: req.file.fileName,
      path: req.file.path,
      status: "processing",
    });
    await video.save();
    runPythonScript(video.path, video._id);
    res.status(202).json({
      success: true,
      videoId: video._id,
    });
  } catch (err) {
    next(err);
  }
};

exports.getCaptions = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) throw new Error("Video not found!");
    res.json({
      status: video.status,
      captions: video.captions || null,
    });
  } catch (err) {
    next(err);
  }
};
