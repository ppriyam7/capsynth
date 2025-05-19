const { spawn } = require("child_process");

function generateCaptions(videoPath) {
  return new Promise((resolve, reject) => {
    const python = spawn("python", [
      "../python-service/generate_captions.py",
      videoPath,
    ]);
    let captions = "";

    python.stdout.on("data", (data) => (captions += data.toString()));
    python.stderr.on("data", (err) => console.error(`Python error: ${err}`));

    python.on("close", (code) => {
      if (code === 0) resolve(captions.trim());
      else reject(new Error(`Python process exited with code ${code}`));
    });
  });
}

module.exports = { generateCaptions };
