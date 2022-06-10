import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="boxbreathing">Box Breathing</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
