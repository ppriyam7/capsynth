import React, { useState } from "react";
import axios from "axios";
export default function Upload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const handleUpload = async () => {
    const formdata = new FormData();
    formdata.append("video", file);
    const res = await axios.post("http://localhost:5000/upload", formdata);
    setMessage(`Uploaded! Video ID: ${res.data.videoId}`);
  };
  return (
    <div>
      <h2 className="text-x1 font-semibold mb-2">Upload a Video</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button
        onClick={handleUpload}
        className="ml-2 px-4 py-1bg-blue-600 text-white rounded"
      >
        Upload
      </button>
      <p className="mt-2 text-green-600">{message}</p>
    </div>
  );
}
