import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Navbar from "@common/Navbar/Navbar";
import Footer from "@common/Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children || <Outlet />}</main>
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
