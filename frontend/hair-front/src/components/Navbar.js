import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";


const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="navbar">
      <div className="logo">
      </div>
      <ul className={"click ? 'nav-menu active : nav-menu"}>
        <li>
          <Link to="/">HomePage</Link>
        </li>

        <li>
          <Link to="/loginpage">LoginPage</Link>
        </li>

        <li>
          <Link to="/registerpage">RegisterPage</Link>
        </li>

        <li>
          <Link to="/homepage">HomePage</Link>
        </li>

      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "brown" }} />
        ) : (
          <FaTimes size={30} style={{ color: "brown" }} />
        )}
        <FaBars size={30} style={{ color: "brown" }} />
      </div>
    </div>
  );
};

export default Navbar;
