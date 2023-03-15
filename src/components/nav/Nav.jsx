import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";
import logo from "./logo.png";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div>
      <nav className="nav">
        <div className="nav-bar">
          <div className="logo">
            {/* <button>My Brand</button> */}
            <img src={logo} alt={logo} />
          </div>
          <div className="nav-items">
            <Link to="/" className="nav-links active">
              Home
            </Link>
            <Link to="/about" className="nav-links">
              About
            </Link>
            <Link to="/offers" className="nav-links">
              Offers
            </Link>
            <Link to="/" className="nav-links">
              Movies
            </Link>
            <Link to="/" className="nav-links">
              TV Shows
            </Link>
            <Link to="/sign-up" className="nav-links ">
              <button> Sign Up</button>
            </Link>
            <div className="nav-icons" onClick={handleClick}>
              {click ? <VscChromeClose /> : <GiHamburgerMenu />}
            </div>
          </div>
        </div>

        <div className={click ? "mobile-nav-items" : "mobile-closed"}>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/offers">Offers</Link>
          <Link to="/offers">Movies</Link>
          <Link to="/offers">Tv Shows</Link>
          <Link to="/sign-up">Sign Up</Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
