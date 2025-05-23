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

const { spawn } = require("child_process");
exports.searchCaptions = async (req, res, next) => {
  try {
    const query = req.body.query;
    const embedPy = spawn("python", [
      path.join(__dirname, "../../python-service/captionembedder.py"),
      query,
    ]);
    let vectorStr = "";
    embedPy.stdout.on("data", (data) => {
      vectorStr += data.toString();
    });
    embedPy.on("close", async () => {
      const queryVector = vectorStr.split(",").map(Number);
      const allVideos = await Video.find({ embedding: { $exists: true } });
    });
    const cosine = (a, b) => {
      const dot = a.reduce((sum, v, i) => sum + v * b[i], 0);
      const normA = Math.sqrt(a.reduce((sum, v) => sum + v * v, 0));
      const normB = Math.sqrt(b.reduce((sum, v) => sum + v * v, 0));
      return dot / (normA * normB);
    };
    const results = allVideos
      .map((video) => ({
        video,
        similarity: cosine(queryVector, video.embedding),
      }))
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, 5);
    res.json({
      query,
      results: results.map((r) => ({
        id: r.video._id,
        fileName: r.video.fileName,
        captions: r.video.captions,
        similarity: r.similarity.toFixed(3),
      })),
    });
  } catch (err) {
    next(err);
  }
};
