import React from "react";

import homeImg from "../../assets/home.png"

import "./navbar.style.css";

const Navbar = () => {
  return (
    <nav>
      <h1 className="title">COVID-19 TRACKER</h1>
      <h2 className="subtitle">Stay At Home</h2>
      <img className="home-img" src={homeImg} alt=""/>

    </nav>
  );
};

export default Navbar;
