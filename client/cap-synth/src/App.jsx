import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Upload from "./components/Upload";
// import VideoList from "./components/VideoList";
// import Search from "./components/Search";
// import LiveCaption from "./components/LiveCaption";

export default function App() {
  return (
    <Router>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">CapSynth</h1>
        <Routes>
          <Route path="/upload" element={<Upload />} />
          <Route path="/search" element={<Search />} />
          <Route path="/live" element={<LiveCaption />} />
        </Routes>
      </div>
    </Router>
  );
}
