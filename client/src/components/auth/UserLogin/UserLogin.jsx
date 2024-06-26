import { useNavigate } from "react-router-dom";
import Input from "@reusable/Input";
import Button from "@reusable/Button";
import Icon from "@reusable/Icon";
import Navigator from "@reusable/Navigator";
import usePasswordVisibility from "@hooks/usePasswordVisibility";
import useUserContext from "@hooks/useUserContext";
import { logBuddy, logError } from "@utils/errorUtils";

const UserLogin = () => {
  const navigate = useNavigate("");
  const { showPassword, togglePasswordVisibility } = usePasswordVisibility();
  const { loginUser } = useUserContext();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Extract form data
    const formData = new FormData(e.target);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      // Attempt user login
      await loginUser(data);

      logBuddy(data);

      setTimeout(() => {
        navigate("/");
      });
    } catch (error) {
      // Handle Errors
      logError(error);
    }
  };

  return (
    <div className="main-container">
      <div className="user-login-container">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          {/* Input for email */}
          <Input
            labelName="Email *"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          {/* Inputer for password */}
          <div className="password-input">
            <Input
              labelName="Password *"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              required
            />

            {/* Reusable Icon component for displaying icons and making the password visibale */}
            <Icon
              library="fa"
              name={showPassword ? "FaEyeSlash" : "FaEye"}
              className="hide-and-show-pass"
              onClick={togglePasswordVisibility}
            />
          </div>

          <p>Test</p>
          <Button name="Login" type="submit" />

          <Navigator
            message="No account yet?
        "
            pathName="Register"
            pathUrl="/user-registeration"
          />
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
