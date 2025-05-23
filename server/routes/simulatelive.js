const { spawn } = require("child_process");
const path = require("path");

function simulateLiveCaptioning(socket, videoPath, language = "en") {
  const script = spawn("python", [
    path.join(__dirname, "../python-service/livecaptionstream.py"),
    videoPath,
    language,
  ]);

  script.stdout.on("data", (data) => {
    const lines = data.toString().split("\n").filter(Boolean);
    for (let line of lines) {
      socket.emit("caption", line);
    }
  });

  script.stderr.on("data", (err) => console.error(`Python error: ${err}`));
}

module.exports = { simulateLiveCaptioning };
