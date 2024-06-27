import { useLocation } from "react-router-dom";
import "@styles/reusableComponents.scss";
import Greetings from "./Greetings";
import Profile from "./Profile";
import Logo from "./Logo";
import Button from "@reusable/Button";
import Icon from "@reusable/Icon";
import useUserContext from "@hooks/useUserContext";
import useNavigation from "@hooks/useNavigation";

const Navbar = () => {
  const { isLoggedIn } = useUserContext();
  const { goTo, goBack } = useNavigation();
  const location = useLocation();

  return (
    <div className="navbar-container">
      {location.pathname === "/" ? (
        <Logo />
      ) : (
        <Icon
          library="md"
          name="MdOutlineArrowBackIos"
          size={30}
          className="go-back"
          onClick={() => goBack()}
        />
      )}

      {isLoggedIn ? (
        <>
          <Greetings />
          <Profile />
        </>
      ) : (
        <Button name="Login" width={80} onClick={() => goTo("/user-login")} />
      )}
    </div>
  );
};

export default Navbar;
