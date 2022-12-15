import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="myLinks">
      <h1 className="my_tiltle">
        <Link to="/">Stack OverFlow</Link>
      </h1>
      <input type="text"
      className="serach"
      placeholder="search" />
      <div className="nav_lnks">
        {/* <Link to="/">Home</Link> */}
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
        <Link to="/signin">Sign up</Link>
      </div>
    </div>
  );
};

export default Navbar;
