/* eslint-disable no-undef */

import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div>
      <div className="navigation flex">
        <div className="logo">
          <p><span>F</span>oodLove <span className="r">R</span></p>
        </div>
        <div className="menu">
        <ul className="flex">
          <NavLink to="/"> Home</NavLink>
          <NavLink to="/about"> About us</NavLink>
          <NavLink to="/products"> Products</NavLink>
          <NavLink to="/users"> Users</NavLink>
          <NavLink to="/contact"> Contact</NavLink>
        </ul>
        </div>
        
      </div>
    </div>
  );
}
