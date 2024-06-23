import { Link } from "react-router-dom";
import logo from "@images/navbar/logo.png";

const Logo = () => {
  return (
    <div className="logo-container">
      <Link to="/">
        <img src={logo} alt="logo image" />
      </Link>
    </div>
  );
};

export default Logo;
