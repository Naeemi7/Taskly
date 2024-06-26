import { useNavigate } from "react-router-dom";
import Input from "@reusable/Input";
import Button from "@reusable/Button";
import Icon from "@reusable/Icon";
import AlertBox from "@reusable/AlertBox";
import Navigator from "@reusable/Navigator";
import usePasswordVisibility from "@hooks/usePasswordVisibility";
import useUserContext from "@hooks/useUserContext";
import { logBuddy, logError } from "@utils/errorUtils";

const UserLogin = () => {
  const navigate = useNavigate();
  const { showPassword, togglePasswordVisibility } = usePasswordVisibility();
  const { loginUser, error } = useUserContext();

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      await loginUser(data);
      logBuddy(data);

      navigate("/add-task");
      // navigate("/");
    } catch (error) {
      logError(error.status);
    }
  };

  return (
    <div className="main-container">
      <div className="user-login-container">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <Input
            labelName="Email *"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <div className="password-input">
            <Input
              labelName="Password *"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              required
            />
            <Icon
              library="fa"
              name={showPassword ? "FaEyeSlash" : "FaEye"}
              className="hide-and-show-pass"
              onClick={togglePasswordVisibility}
            />
          </div>

          {error && <AlertBox message={error} />}

          <Button name="Login" type="submit" />

          <Navigator
            message="No account yet?"
            pathName="Register"
            pathUrl="/user-registeration"
          />
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
