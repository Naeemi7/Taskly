import { useState } from "react";
import Input from "@reusable/Input";
import Button from "@reusable/Button";
import Icon from "@reusable/Icon";
import Navigator from "@reusable/Navigator";
import usePasswordVisibility from "@hooks/usePasswordVisibility";

const UserRegisteration = () => {
  const [confirmPassword, setConfirmPassword] = useState(false);
  const { showPassword, togglePasswordVisibility } = usePasswordVisibility();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Extract the form data
    const formData = new FormData(e.target);

    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      username: formData.get("username"),
      password: formData.get("password"),
    };

    // const confirmedPassword = formData.get("confirm-password");

    if (data.password !== confirmPassword) {
      setConfirmPassword(false);
      return;
    } else {
      setConfirmPassword(true);
    }
  };

  return (
    <div className="main-container">
      <div className="user-registeration-container">
        <h2>Registeration</h2>

        <form onSubmit={handleFormSubmit}>
          {/* Input for the firstname */}
          <Input
            labelName="Firstname"
            type="text"
            name="firstname"
            placeholder="Enter your firstname"
          />

          {/* Input for lastname */}
          <Input
            labelName="Lastname"
            type="text"
            name="lastname"
            placeholder="Enter your lastname"
          />

          {/* Input for username */}
          <Input
            labelName="Username"
            type="text"
            name="username"
            placeholder="Enter your username"
          />

          {/* Input for email */}
          <Input
            labelName="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
          />

          {/* Inputer for password */}
          <div className="password-input">
            <Input
              labelName="Password *"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
            />

            {/* Reusable Icon component for displaying icons and making the password visibale */}
            <Icon
              library="fa"
              name={showPassword ? "FaEyeSlash" : "FaEye"}
              className="hide-and-show-pass"
              onClick={togglePasswordVisibility}
            />
          </div>

          {/* Input for confirm password */}
          <div className="password-input">
            <Input
              labelName="Confirm password"
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm your password"
            />

            {/* Reusable Icon component for displaying icons and making the password visibale */}
            <Icon
              library="fa"
              name={showPassword ? "FaEyeSlash" : "FaEye"}
              className="hide-and-show-pass"
              onClick={togglePasswordVisibility}
            />
          </div>
          <Button name="Register" />

          <Navigator
            message="Already signed up? "
            pathName="Login"
            pathUrl="/user-login"
          />
        </form>
      </div>
    </div>
  );
};

export default UserRegisteration;
