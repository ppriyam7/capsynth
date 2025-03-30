const express = require("express");
const cors = require("cors");
const multer = require("multer");
const apiRoutes = require("./routes/api");

const app = express();
app.use(cors());
app.use(express.json());
const upload = multer({ dest: "uploads/" });
app.post("/upload", upload.single("video"), apiRoutes.handleUpload);
app.listen(5000, () => console.log("Server running on port 5000!"));
