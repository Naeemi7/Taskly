import { useState } from "react";
import ReusableInput from "@reusable/ReusableInput";
import ReusableButton from "@reusable/ReusableButton";
import ReusableIcon from "@reusable/ReusableIcon";
import ReusableNavigator from "@reusable/ReusableNavigator";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="main-container">
      <div className="user-login-container">
        <h2>Login</h2>

        <form>
          {/* Input for email */}
          <ReusableInput
            labelName="Email *"
            inputType="email"
            inputValue={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Inputer for password */}
          <div className="password-input">
            <ReusableInput
              labelName="Password *"
              inputType={showPassword ? "text" : "password"}
              inputValue={password}
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

          <ReusableNavigator
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
