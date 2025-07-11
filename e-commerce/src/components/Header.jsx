import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="main-header">
      <div
        className="logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        E-Shop
      </div>
              <ul className="nav-categories">
          <li onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            Home
          </li>
          <li onClick={() => navigate("/shop")} style={{ cursor: "pointer" }}>
            Shop
          </li>
          <li onClick={() => navigate("/liquid-glass")} style={{ cursor: "pointer" }}>
            Glass UI
          </li>
          <li onClick={() => navigate("/deals")} style={{ cursor: "pointer" }}>
            Deals
          </li>
          <li onClick={() => navigate("/contact")} style={{ cursor: "pointer" }}>
            Contact
          </li>
        </ul>
      <div className="header-actions">
        <button
          className="cart-btn"
          title="Cart"
          onClick={() => navigate("/cart")}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </button>
        <img
          className="avatar"
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User Avatar"
        />
      </div>
    </nav>
  );
};

export default Header;
