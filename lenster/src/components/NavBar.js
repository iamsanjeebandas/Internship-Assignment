/* import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="search-bar">
        <img src="./images/logo.svg" alt="" className="mainlogo" />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: "#808080" }}
          className="glass_icon"
        />
        <input
          type="search"
          placeholder="Search..."
          className="search-input"
        ></input>
      </div>
      <div className="navbar-options">
        <a class="navbar-link" href="#">
          Home
        </a>
        <a class="navbar-link" href="#">
          Explore
        </a>
        <a class="navbar-link" href="#">
          More
        </a>
      </div>
      <div className="loginapp">
        <FontAwesomeIcon
          icon={faUser}
          style={{ color: "#ffffff" }}
          className="iconLogin"
        />
        <div className="textLogin">Login</div>
      </div>
    </div>
  );
};


export default NavBar;
 */

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={isSticky ? "navbar sticky" : "navbar"}>
      <div className="search-bar">
        <img src="./images/logo.svg" alt="" className="mainlogo" />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: "#808080" }}
          className="glass_icon"
        />
        <input
          type="search"
          placeholder="Search..."
          className="search-input"
        ></input>
      </div>
      <div className="navbar-options">
        <a className="navbar-link" href="#">
          Home
        </a>
        <a className="navbar-link" href="#">
          Explore
        </a>
        <a className="navbar-link" href="#">
          More
        </a>
      </div>
      <div className="loginapp">
        <FontAwesomeIcon
          icon={faUser}
          style={{ color: "#ffffff" }}
          className="iconLogin"
        />
        <div className="textLogin">Login</div>
      </div>
    </div>
  );
};

export default NavBar;
