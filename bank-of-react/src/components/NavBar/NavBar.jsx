import "./NavBar.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <h1 className="site-title">Bank of React</h1>
      <ul>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/debit" className="link">
            Debit
          </Link>
        </li>
        <li>
          <Link to="/credit" className="link">
            Credit
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
