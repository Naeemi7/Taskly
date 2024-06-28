import dashboardData from "@data/dashboardData";
import DashboardNavItems from "./DashboardNavItems";
import DashboardAvatar from "./DashboardAvatar";

const Dashboard = () => {
  return (
    <>
      <nav className="sidebar-container">
        <DashboardAvatar />
        <ul>
          {dashboardData.map((item, index) => (
            <DashboardNavItems item={item} key={index} />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Dashboard;
