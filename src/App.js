import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Home } from "./pages/home/Home";
import Navbar from "./customComponent/Navbar/Navbar";
import { SingleVideo } from "./pages/singleVideo/SingleVideo";
import { Like } from "./pages/like/Like";
import { WatchLater } from "./pages/watchLater/WatchLater";
import { Playlist } from "./pages/playlist/Playlist";
import { SinglePlaylist } from "./pages/singlePlaylist/SinglePlaylist.jsx";
import Toast from "./customComponent/Notification/Toast";

import { Login } from "./pages/authentication/Login";
import { Signup } from "./pages/authentication/Signup";
import CookieHelper from "./utils/cookies/cookieHelper";
import "./App.css";
import { setUserToken } from "./redux/auth/AuthSlice";

const App = () => {
  const authDispatch = useDispatch();
  const cookieHelper = new CookieHelper();
  const userData = cookieHelper.getCookie();
  if (userData?.auth_token) {
    const token = userData.auth_token;
    authDispatch(setUserToken(token));
  }
  return (
    <Router>
      <Toast />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/login" exact element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/signup" exact element={<Signup />} />
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
      <Routes>
        <Route
          path="/playlists/:playlistId"
          exact
          element={<SinglePlaylist />}
        />
      </Routes>
      <Routes>
        <Route path="/playlists" exact element={<Playlist />} />
      </Routes>
    </Router>
  );
};

export default App;
