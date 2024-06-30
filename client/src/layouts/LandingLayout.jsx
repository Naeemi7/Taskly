import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Navbar from "@common/Navbar/Navbar";
import Footer from "@common/Footer/Footer";

const LandingLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children || <Outlet />}</main>
      <Footer />
    </div>
  );
};

LandingLayout.propTypes = {
  children: PropTypes.node,
};

export default LandingLayout;
