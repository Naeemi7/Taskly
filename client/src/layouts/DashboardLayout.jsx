import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Navbar from "@common/Navbar/Navbar";
import Footer from "@common/Footer/Footer";
import Sidebar from "@features/Dashboard/Sidebar/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Navbar />
      <Sidebar />
      <main>{children || <Outlet />}</main>
      <Footer />
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node,
};

export default DashboardLayout;
