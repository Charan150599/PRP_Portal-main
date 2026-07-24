import React from "react";
import "./Dashboard.css";
import TotalPlacements from "../assets/AdminDashboardAssets/Placements.png";
import ActiveStu from "../assets/AdminDashboardAssets/Activestudents-1.png";
import VerifiedRecruiters from "../assets/AdminDashboardAssets/Recruiters.png";
import PartnerCompany from "../assets/AdminDashboardAssets/Companies.png";
import Newusers from "../assets/AdminDashboardAssets/NewUser.png";
import CompanyImage from "../assets/AdminDashboardAssets/CompanyDocument.png";
import RecruiterImg from "../assets/AdminDashboardAssets/RecruiterVerified.png";
import PolicyImg from "../assets/AdminDashboardAssets/SecurityPolicy.png";
import FailedloginImg from "../assets/AdminDashboardAssets/FailedLogin.png";
import SearchImage from "../assets/AdminDashboardAssets/Search.png";
import Notification from "../assets/AdminDashboardAssets/Alert.png";
import About from "../assets/AdminDashboardAssets/Question.png";
import SettingsImage from "../assets/AdminDashboardAssets/Platformsettings.png";
import UserImg from "../assets/AdminDashboardAssets/Adminimg.png";
import SortImg from "../assets/AdminDashboardAssets/Sort.png";
import FilterImg from "../assets/AdminDashboardAssets/Filter.png";
import AnnualGoal from "../assets/AdminDashboardAssets/Annual.png";
import LastMonth from "../assets/AdminDashboardAssets/Month.png";
import PendingReview from "../assets/AdminDashboardAssets/Review.png";
import Growth from "../assets/AdminDashboardAssets/StableGrowth.png";

const AdminDashboardOverview = () => {
  const statCards = [
    {
      label: "TOTAL PLACEMENTS",
      value: "4,120",
      note: "82% of Annual Goal",
      icon: TotalPlacements,
      noteIcon: AnnualGoal,
      noteClass: "dashboard-stat-note-placements",
    },
    {
      label: "ACTIVE STUDENTS",
      value: "12,482",
      note: "+12% vs last month",
      icon: ActiveStu,
      noteIcon: LastMonth,
      noteClass: "dashboard-stat-note-students",
    },
    {
      label: "VERIFIED RECRUITERS",
      value: "3,142",
      note: "14 pending review",
      icon: VerifiedRecruiters,
      noteIcon: PendingReview,
      noteClass: "dashboard-stat-note-recruiters",
    },
    {
      label: "PARTNER COMPANIES",
      value: "312",
      note: "Stable Growth",
      icon: PartnerCompany,
      noteIcon: Growth,
      noteClass: "dashboard-stat-note-companies",
    },
  ];

  const chartData = [
    { month: "Jan", value: 45 },
    { month: "Feb", value: 68 },
    { month: "Mar", value: 38 },
    { month: "Apr", value: 82 },
    { month: "May", value: 60 },
    { month: "Jun", value: 100 },
  ];

  const activityLog = [
    { title: "New User Registration", meta: "Alex Morgan • 2 mins ago", icon: Newusers },
    { title: "Company Document Uploaded", meta: "Nexus Dynamics • 45 mins ago", icon: CompanyImage },
    { title: "Recruiter Verified", meta: "Global Tech Sol. • 3 hrs ago", icon: RecruiterImg },
    { title: "Security Policy Updated", meta: "Applied globally • 5 hrs ago", icon: PolicyImg },
    { title: "Failed Login Attempt", meta: "IP: 192.168.1.45 • 8 hrs ago", icon: FailedloginImg },
  ];

  const userRows = [
    {
      initials: "SK",
      name: "Sarah K. Jenkins",
      email: "sarah.j@globalhr.com",
      role: "RECRUITER",
      activity: 'Published "Senior AI Architect" role',
      time: "2 mins ago",
    },
    {
      initials: "DL",
      name: "David Lee",
      email: "d.lee@candidate.me",
      role: "CANDIDATE",
      activity: "Submitted portfolio via AI matching",
      time: "1 hour ago",
    },
  ];

  return (
    <main className="dashboard-container">
      <header className="dashboard-topbar">
        <div className="dashboard-search-box">
          <input
            type="text"
            className="dashboard-search-input"
            placeholder="Search resources, users, or logs..."
          />
          <img src={SearchImage} alt="Search" className="dashboard-search-icon" />
        </div>

        <div className="dashboard-topbar-right">
          <img src={Notification} alt="Notifications" className="dashboard-topbar-icon" />
          <img src={About} alt="Help" className="dashboard-topbar-icon" />
          <img src={SettingsImage} alt="Settings" className="dashboard-topbar-icon" />

          <div className="dashboard-admin-profile">
            <div className="dashboard-admin-text">
              <span className="dashboard-admin-name">Admin User</span>
              <span className="dashboard-admin-role">SUPER ADMIN</span>
            </div>
            <div className="dashboard-admin-avatar">
              <img src={UserImg} alt="Admin Avatar" className="admin-avatar-img" />
            </div>
          </div>
        </div>
      </header>

      <section className="dashboard-stats-grid">
        {statCards.map((card) => (
          <div className="dashboard-stat-card" key={card.label}>
            <div className="dashboard-stat-header">
              <span className="dashboard-stat-label">{card.label}</span>
              <img src={card.icon} alt={card.label} className="dashboard-stat-icon" />
            </div>
            <div className="dashboard-stat-value">{card.value}</div>
            <div className={`dashboard-stat-note ${card.noteClass}`}>
              <img src={card.noteIcon} alt="" className="dashboard-stat-note-icon" />
              {card.note}
            </div>
          </div>
        ))}
      </section>

      <section className="dashboard-middle-grid">
        <div className="dashboard-chart-panel">
          <div className="admin-dashboard-chart-header">
            <div>
              <h3 className="admin-dashboard-panel-title">Placement Performance</h3>
              <p className="admin-dashboard-panel-subtitle">Monthly placement success trends</p>
            </div>
            <span className="admin-dashboard-chart-legend">
              <span className="admin-dashboard-legend-dot"></span> Placements
            </span>
          </div>

          <div className="dashboard-bar-chart">
            {chartData.map((bar) => (
              <div className="dashboard-bar-column" key={bar.month}>
                <div
                  className={`dashboard-bar ${bar.month === "Jun" ? "dashboard-bar-highlight" : ""}`}
                  style={{ height: `${bar.value}%` }}
                ></div>
                <span className="dashboard-bar-label">{bar.month}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-activity-panel">
          <h3 className="admin-dashboard-panel-title">Admin Activity Log</h3>
          <ul className="dashboard-activity-list">
            {activityLog.map((item) => (
              <li className="dashboard-activity-item" key={item.title}>
                <img src={item.icon} alt={item.title} className="dashboard-activity-icon" />
                <div className="dashboard-activity-text">
                  <span className="dashboard-activity-title">{item.title}</span>
                  <span className="dashboard-activity-meta">{item.meta}</span>
                </div>
              </li>
            ))}
          </ul>
          <button className="dashboard-view-history-btn">View Full History</button>
        </div>
      </section>

      <section className="dashboard-table-panel">
        <div className="admin-dashboard-table-header">
          <h3 className="admin-dashboard-panel-title">User Management &amp; Recent Activity</h3>
          <div className="admin-dashboard-table-actions">
            <span className="admin-dashboard-table-action">
              <img src={FilterImg} alt="Filter Icon" className="dashboard-action-icon" /> Filter
            </span>
            <span className="admin-dashboard-table-action">
              <img src={SortImg} alt="Sort Icon" className="dashboard-action-icon" /> Sort
            </span>
          </div>
        </div>

        <table className="dashboard-user-table">
          <thead>
            <tr>
              <th>USER</th>
              <th>ROLE</th>
              <th>ACTIVITY</th>
              <th>TIMESTAMP</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {userRows.map((row) => (
              <tr key={row.email}>
                <td className="dashboard-user-cell">
                  <div className="dashboard-user-avatar">{row.initials}</div>
                  <div className="dashboard-user-text">
                    <span className="dashboard-user-name">{row.name}</span>
                    <span className="dashboard-user-email">{row.email}</span>
                  </div>
                </td>
                <td>
                  <span className={`dashboard-role-badge dashboard-role-${row.role.toLowerCase()}`}>
                    {row.role}
                  </span>
                </td>
                <td>{row.activity}</td>
                <td className="dashboard-table-time">{row.time}</td>
                <td className="dashboard-table-actions-cell">⋮</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default AdminDashboardOverview;
