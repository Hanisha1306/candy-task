import React from "react";
import { Link } from "react-router-dom";
import "../App.css";


function SideBar() {
  return (
    <div className="sidebar">
      <h3 className="sidebar-title">product explore</h3>
      <p  className="sidebar-title">discover amazing produts</p>
      <ul>
        <h3> <li><Link to="/"> Home</Link></li></h3>
        <h3> <li><Link to="/categories"> Categories</Link></li></h3>
      </ul>
    </div>
  );
}

export default SideBar;
