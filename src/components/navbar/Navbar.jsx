import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="myLinks">
      <div className="my_tiltle">
        <h1>Stack OverFlow</h1>
      </div>
      <input type="text"
      className="serach"
      placeholder="search" />
      <div className="nav_lnks">
        <Link to="/">Home</Link>
        <Link to="/signin">Sign In</Link>
        {/* <Link to="/user">User</Link> */}
      </div>
    </div>
  );
};

export default Navbar;
