import React, { useState } from "react";
import "./Sidebar.css";

import HomeImage from "../assets/AdminDashboardAssets/DashboardHome.png";
import UserImage from "../assets/AdminDashboardAssets/Usermanagement.png";
import CompanyImage from "../assets/AdminDashboardAssets/CompanyVerification.png";
import SettingsImage from "../assets/AdminDashboardAssets/Platformsettings.png";
import AnalyticsImage from "../assets/AdminDashboardAssets/Analytics.png";

const SidebarNavigation = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    { label: "Dashboard", icon: HomeImage },
    { label: "User Management", icon: UserImage },
    { label: "Company Verification", icon: CompanyImage },
    { label: "Platform Settings", icon: SettingsImage },
    { label: "Analytics", icon: AnalyticsImage },
  ];

  return (
    <aside className="sidebar-container">
      <nav className="sidebar-nav">
        <ul className="sidebar-menu-list">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className={`sidebar-menu-item ${
                activeItem === item.label ? "sidebar-menu-item-active" : ""
              }`}
              onClick={() => setActiveItem(item.label)}
            >
              <span className="sidebar-menu-icon">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="sidebar-icon"
                />
              </span>

              <span className="sidebar-menu-label">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarNavigation;