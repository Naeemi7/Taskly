import { useState } from "react";
import Input from "@reusable/Input";
import Button from "@reusable/Button";
import Icon from "@reusable/Icon";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="user-login-container">
      <h2>Login</h2>

      <form>
        <Input
          labelName="Email *"
          inputType="email"
          inputValue={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="password-input">
          <Input
            labelName="Password *"
            inputType={showPassword ? "text" : "password"}
            inputValue={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Icon
            library="fa"
            name={showPassword ? "FaEyeSlash" : "FaEye"}
            className="hide-and-show-pass"
            onClick={togglePasswordVisibility}
          />
        </div>
        <Button name="Login" />
      </form>
    </div>
  );
};

export default UserLogin;
