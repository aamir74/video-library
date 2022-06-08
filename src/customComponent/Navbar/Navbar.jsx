import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { useFilter } from "../../hooks/context/filter-context";
import CookieHelper from "../../utils/cookies/cookieHelper";

import "./Navbar.css";
import { removeUserToken } from "../../redux/auth/AuthSlice";
import { useNotifications } from "reapop";
import { search } from "../../redux/auth/FilterSlice";
const Navbar = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store.userData);
  const searchHandler = (e) => {
    dispatch(search({ type: "SEARCH", search: e.target.value }));
  };

  const handleLogout = () => {
    const cookieHelper = new CookieHelper();
    cookieHelper.setCookie("", null, -365);
    dispatch(removeUserToken());
    notify({
      title: <h3> Success :)</h3>,
      message: <h5>Logged out successfully </h5>,
      status: "success",
      dismissible: true,
      dismissAfter: 5000,
      showDismissButton: true,
      position: "bottom-left",
    });
    navigate("/login");
  };

  return (
    <nav className="p-nav">
      <Link to="/">
        <div className="logo">
          <i className="fa fa-bolt" aria-hidden="true"></i>
          <h2>Flash</h2>
        </div>
      </Link>
      <div className="nav-search">
        <input
          id="searchbar"
          className="textbox"
          type="email"
          placeholder="Search"
          onChange={searchHandler}
        />
      </div>
      <div className="nav-icons">
        <Link to="/like">
          <span className="badge-icon">
            <i className="fa fa-thumbs-o-up fa-lg" aria-hidden="true"></i>
          </span>
        </Link>
        <Link to="/watchlist">
          <span className="badge-icon">
            <i className="fa fa-clock-o fa-lg" aria-hidden="true"></i>
          </span>
        </Link>
        <Link to="/playlists">
          <span className="badge-icon">
            <i className="fa fa-play-circle-o fa-lg" aria-hidden="true"></i>
          </span>
        </Link>

        {auth ? (
          <button onClick={handleLogout} className="btn-text  btn-color">
            Log Out
          </button>
        ) : (
          <Link to="/login">
            <button className="btn-text btn-primary btn-bg-color">Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
