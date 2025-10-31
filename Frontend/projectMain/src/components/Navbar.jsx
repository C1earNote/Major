import React from "react";
import "./Navbar.css";

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <nav className="navbar">
      <h2 className="logo">Drug Detection System</h2>
      <ul className="nav-links">
        <li
          className={`nav-link ${activeTab === "dashboard" ? "active" : ""}`}
          onClick={() => setActiveTab("dashboard")}
        >
          Dashboard
        </li>
        <li
          className={`nav-link ${activeTab === "detected" ? "active" : ""}`}
          onClick={() => setActiveTab("detected")}
        >
          Detected Channels
        </li>
        <li
          className={`nav-link ${activeTab === "suspicious" ? "active" : ""}`}
          onClick={() => setActiveTab("suspicious")}
        >
          Suspicious Users
        </li>
      </ul>
    </nav>
  );
}
