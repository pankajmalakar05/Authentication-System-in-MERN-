import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <section id="header">
      <Link to="/">
        <img src="/logo (1).png" className="logo" alt="logo" />
      </Link>
      <div>
        <ul id="navbar">
          <li>
            <Link to="/" className="active">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login" className="login-btn">Login</Link>
          </li>
          <li id="lg-bag">
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </li>
          <li>
            <a href="#" id="close">
              <i className="fa-solid fa-xmark"></i>
            </a>
          </li>
        </ul>
        <div id="mobile">
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <i id="bar" className="fa-solid fa-bars"></i>
        </div>
      </div>
    </section>
  );
}

export default Navbar;


