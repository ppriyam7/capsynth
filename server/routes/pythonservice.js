const { spawn } = require("child_process");
const path = require("path");
const Video = require("../models/Video");

function runPythonScript(videoPath, videoId) {
  const python = spawn("python", [
    path.join(__dirname, "../../python-service/generate_captions.py"),
    videoPath,
  ]);

  let captions = "";

  python.stdout.on("data", (data) => {
    captions += data.toString();
  });

  python.stderr.on("data", (err) => {
    console.error(`Python error: ${err}`);
  });

  python.on("close", async (code) => {
    if (code === 0) {
      const embedPy = spawn("python", [
        path.join(__dirname, "../../python-service/captionembedder.py"),
        captions.trim(),
      ]);
      const summarizePy = spawn("python", [
        path.join(__dirname, "../../python-service/summarizecaption.py"),
        captions.trim(),
      ]);
      let embedding = "";
      let description = "";
      embedPy.stdout.on("data", (data) => {
        embedding += data.toString();
      });
      summarizePy.stdout.on("data", (data) => (description += data.toString()));
      embedPy.on("close", async () => {
        const embedVector = embedding.split(",").map(Number);
        await Video.findByIdAndUpdate(videoId, {
          status: "completed",
          captions: captions.trim(),
          embedding: embedVector,
        });
      });
    } else {
      await Video.findByIdAndUpdate(videoId, { status: "failed" });
    }
  });
}

module.exports = { runPythonScript };
