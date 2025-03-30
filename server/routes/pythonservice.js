const { spawn } = require("child_process");
const runScript = (videopath) => {
  return new Promise((resolve, reject) => {
    const python = spawn("python", [
      "./python-service/generatecaptions.py",
      videopath,
    ]);
    python.stdout.on("data", (data) => resolve(data.toString()));
    python.stderr.on("data", (err) => reject(err.toString()));
  });
};

module.exports = { runScript };
