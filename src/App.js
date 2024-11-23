import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Explore from "./pages/explore";
import CreatePlayList from "./pages/createPlayList";
import MusicData from "./assets/musicData";
import './pages/global.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/create-playlist" element={<CreatePlayList />} />
          <Route path="/music-data" element={<MusicData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;