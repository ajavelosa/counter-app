import React, { Component } from "react";

// Stateless function

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge-pill badge-secondary">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
