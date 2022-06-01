import React from "react";
import { Link } from "react-router-dom";
import { useFilter } from "../../hooks/context/filter-context";

import "./Navbar.css";
const Navbar = () => {
  const { state, dispatch } = useFilter();
  const searchHandler = (e) => {
    dispatch({ type: "SEARCH", search: e.target.value });
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
        <Link to="/cart">
          <span className="badge-icon">
            <i className="fa fa-clock-o fa-lg" aria-hidden="true"></i>
            <span className="badge">3</span>
          </span>
        </Link>
        <Link to="/wishlist">
          <span className="badge-icon">
            <i className="fa fa-play-circle-o fa-lg" aria-hidden="true"></i>

            <span className="badge">3</span>
          </span>
        </Link>
        {/* <button onClick={handleLogout} className="btn-text  btn-color">
            Log Out
          </button> */}
        <Link to="/login">
          <button className="btn-text btn-primary btn-bg-color">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
