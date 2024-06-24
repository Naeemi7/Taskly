import { useState } from "react";
import ReusableInput from "@reusable/ReusableInput";
import ReusableButton from "@reusable/ReusableButton";
import ReusableIcon from "@reusable/ReusableIcon";
import Navigator from "@reusable/Navigator";
import usePasswordVisibility from "@hooks/usePasswordVisibility";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { showPassword, togglePasswordVisibility } = usePasswordVisibility();

  return (
    <div className="main-container">
      <div className="user-login-container">
        <h2>Login</h2>

        <form>
          {/* Input for email */}
          <ReusableInput
            labelName="Email *"
            inputType="email"
            name={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Inputer for password */}
          <div className="password-input">
            <ReusableInput
              labelName="Password *"
              inputType={showPassword ? "text" : "password"}
              name={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Reusable Icon component for displaying icons and making the password visibale */}
            <ReusableIcon
              library="fa"
              name={showPassword ? "FaEyeSlash" : "FaEye"}
              className="hide-and-show-pass"
              onClick={togglePasswordVisibility}
            />
          </div>

          <ReusableButton name="Login" />

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
