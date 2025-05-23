const express = require("express");
const cors = require("cors");
const multer = require("multer");
const http = require("http");
const socketIo = require("socket.io");
const apiRoutes = require("./api");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
  },
});
app.use(cors());
app.use(express.json());
//POST
const upload = multer({ dest: "uploads/" });
app.post("/upload", upload.single("video"), apiRoutes.handleUpload);

//GET
app.get("/video/:id", apiRoutes.getCaptions);
app.get("/search", apiRoutes.searchCaptions);

app.listen(5000, () => console.log("Server running on port 5000!"));
io.on("connection", (scoket) => {
  console.log("Client connected!", socketIo.id);
  socket.on("start-captioning", (data) => {
    const { videoPath, language } = data;
    simulateLiveCaptioning(socketIo, videoPath, language);
  });
  socket.on("disconnect", () => {
    console.log("Client disconnected!", socket.id);
  });
});
