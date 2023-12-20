import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/create">Create Item</Link>
        </li>
        <li>
          <Link to="/lists">List Items</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
