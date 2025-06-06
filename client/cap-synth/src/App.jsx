import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Upload from "./components/Upload";
// import VideoList from "./components/VideoList";
// import Search from "./components/Search";
// import LiveCaption from "./components/LiveCaption";
import 
export default function App() {
  return (
    <Router>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">CapSynth</h1>
        <nav className="mb-4 space-x-4">
          <Link to="/" className="text-blue-500">
            Upload
          </Link>
          <Link to="/videos" className="text-blue-500">
            My Videos
          </Link>
          <Link to="/search" className="text-blue-500">
            Search Captions
          </Link>
          <Link to="/live" className="text-blue-500">
            Live Caption
          </Link>
        </nav>
        <Routes>
          <Route path="/upload" element={<Upload />} />
          <Route path="/videos" element={<VideoList />} />
          <Route path="/search" element={<Search />} />
          <Route path="/live" element={<LiveCaption />} />
        </Routes>
      </div>
    </Router>
  );
}
