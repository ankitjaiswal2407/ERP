import { NavLink } from "react-router-dom";
import {
  RiDashboardFill,
  RiLogoutBoxRLine,
} from "react-icons/ri";

import {
  HiUsers,
  HiOutlineDocumentReport,
} from "react-icons/hi";

import {
  MdOutlineEventAvailable,
  MdInventory2,
  MdNotificationsNone,
} from "react-icons/md";

import { FaMoneyCheckAlt } from "react-icons/fa";

import { IoSettingsOutline, IoPersonCircleOutline } from "react-icons/io5";

import "../../styles/sidebar.css";

function Sidebar({ isOpen, closeSidebar }) {
  const menuItems = [
    { title: "Dashboard", path: "/dashboard", icon: <RiDashboardFill /> },
    { title: "Employees", path: "/employees", icon: <HiUsers /> },
    { title: "Attendance", path: "/attendance", icon: <MdOutlineEventAvailable /> },
    { title: "Leave", path: "/leave", icon: <MdOutlineEventAvailable /> },
    { title: "Payroll", path: "/payroll", icon: <FaMoneyCheckAlt /> },
    { title: "Inventory", path: "/inventory", icon: <MdInventory2 /> },
    { title: "Notifications", path: "/notifications", icon: <MdNotificationsNone /> },
    { title: "Reports", path: "/reports", icon: <HiOutlineDocumentReport /> },
    { title: "Settings", path: "/settings", icon: <IoSettingsOutline /> },
    { title: "Profile", path: "/profile", icon: <IoPersonCircleOutline /> },
  ];

  return (
    <>
      {isOpen && (
        <div className="sidebar-overlay" onClick={closeSidebar}></div>
      )}

      <aside className={`sidebar ${isOpen ? "show" : ""}`}>

        <div className="sidebar-top">

          <div className="logo">
            <h2>SmartERP</h2>
            <span>Enterprise Suite</span>
          </div>

          <button className="close-btn" onClick={closeSidebar}>
            ✕
          </button>

        </div>

        <nav className="sidebar-menu">

          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeSidebar}
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <span className="icon">{item.icon}</span>
              <span>{item.title}</span>
            </NavLink>
          ))}

        </nav>

        <div className="sidebar-footer">

          <div className="profile-box">

            <div className="avatar">P</div>

            <div>
              <h4>Pallavi</h4>
              <p>Administrator</p>
            </div>

          </div>

          <button className="logout-btn">
            <RiLogoutBoxRLine />
            Logout
          </button>

        </div>

      </aside>
    </>
  );
}

export default Sidebar;