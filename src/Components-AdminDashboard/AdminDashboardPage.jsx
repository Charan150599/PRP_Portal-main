import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import "./AdminDashboardPage.css";
 
const AdminDashboardPage = () => {
  return (
<div className="admin-dashboard-page-layout">
<Sidebar />
<Dashboard />
</div>
  );
};
 
export default AdminDashboardPage;