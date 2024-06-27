import Greetings from "./Greetings";
import Profile from "./Profile";
import Logo from "./Logo";
import Button from "@reusable/Button";
import useUserContext from "@hooks/useUserContext";
import useNavigation from "@hooks/useNavigation";

const Navbar = () => {
  const { isLoggedIn } = useUserContext();
  const { goTo } = useNavigation();

  return (
    <div className="navbar-container">
      <Logo />

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
