import EduhireSidebar from "./Sidebar";
import EduhireDashboard from "./Dashboard";
import "./AdminDashboardPage.css";

const AdminDashboardPage = () => {
  return (
    <div className="eduhireAppLayout">
      <EduhireSidebar />
      <EduhireDashboard />
    </div>
  );
};

export default AdminDashboardPage;