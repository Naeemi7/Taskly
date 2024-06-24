import Greetings from "./Greetings";
import Profile from "./Profile";
import Logo from "./Logo";
import ReusableButton from "@reusable/ReusableButton";
import useUserContext from "@hooks/useUserContext";
import useNavigator from "@hooks/useNavigator";

const Navbar = () => {
  const { isLoggedIn } = useUserContext();
  const goTo = useNavigator();

  return (
    <div className="navbar-container">
      <Logo />

      {isLoggedIn ? (
        <>
          <Greetings />
          <Profile />
        </>
      ) : (
        <ReusableButton
          name="Login"
          width={80}
          onClick={() => goTo("/user-login")}
        />
      )}
    </div>
  );
};

export default Navbar;
