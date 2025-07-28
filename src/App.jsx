import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
const App = () => {
  const [sideBar,setsideBar]=useState(true);
  return (
    <div>
      <Navbar setsideBar={setsideBar} />
      <Routes>
        <Route path="/" element={<Home sideBar={sideBar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video/>} />
      </Routes>
    </div>
  );
};

export default App;
