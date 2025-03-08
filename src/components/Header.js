import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import "../styles/header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        
        <Link to="/" className="logo">
          Ecom
        </Link>

        <nav className="nav">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <div className="cart-container">
                <   CartIcon />
              </div>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Header;
