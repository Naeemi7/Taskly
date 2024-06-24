import { useNavigate } from "react-router-dom";
import Greetings from "./Greetings";
import Profile from "./Profile";
import Logo from "./Logo";
import ReusableButton from "@reusable/ReusableButton";

import UseUserContext from "@hooks/UseUserContext";

const Navbar = () => {
  const { isLoggedIn } = UseUserContext();
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/user-login");
  };
  return (
    <div className="navbar-container">
      <Logo />

      {isLoggedIn ? (
        <>
          <Greetings />
          <Profile />
        </>
      ) : (
        <ReusableButton name="Login" width={80} onClick={handleNavigation} />
      )}
    </div>
  );
};

export default Navbar;
