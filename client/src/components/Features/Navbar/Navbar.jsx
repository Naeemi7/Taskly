import Greetings from "./Greetings";
import Profile from "./Profile";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Logo />
      <Greetings />
      <Profile />
    </div>
  );
};

export default Navbar;
