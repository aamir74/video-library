import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { Home } from "./pages/home/Home";
import Navbar from "./customComponent/Navbar/Navbar";
import { SingleVideo } from "./pages/singleVideo/SingleVideo";
import { Like } from "./pages/like/Like";
import { WatchLater } from "./pages/watchLater/WatchLater";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/video/:videoId" exact element={<SingleVideo />} />
      </Routes>
      <Routes>
        <Route path="/like" exact element={<Like />} />
      </Routes>
      <Routes>
        <Route path="/watchlist" exact element={<WatchLater />} />
      </Routes>
    </Router>
  );
};

export default App;
