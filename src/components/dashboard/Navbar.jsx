import { FiMenu, FiSearch, FiBell, FiMoon, FiSun } from "react-icons/fi";
import { useState } from "react";
import "../../styles/navbar.css";

function Navbar({ openSidebar }) {
  const [darkMode, setDarkMode] = useState(false);

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <header className="navbar">
      {/* Left Side */}
      <div className="navbar-left">
        {/* Hamburger Menu */}
        <button className="menu-btn" onClick={openSidebar}>
          <FiMenu size={24} />
        </button>

        {/* Search Box */}
        <div className="search-box">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search employees, payroll, reports..."
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="navbar-right">
        <span className="today">{today}</span>

        {/* Dark Mode */}
        <button
          className="icon-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>

        {/* Notification */}
        <div className="notification">
          <FiBell />
          <span className="badge">3</span>
        </div>

        {/* Profile */}
        <div className="profile">
          <div className="avatar-small">P</div>

          <div className="profile-info">
            <h4>Pallavi</h4>
            <span>Administrator</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;