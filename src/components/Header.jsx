import React from "react";
import "../styles/Header.css";

const Header = () => (
  <header className="header">

    {/* Left Section: Logo */}
    <div className="header-left">
      <h1 className="header-logo">facebook</h1>
    </div>

    {/* Right Section: Icons */}
    <div className="header-right">

      {/* Search Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>

      {/* Menu Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

    </div>
  </header>
);

export default Header;
