import { useState } from "react";
import ReusableInput from "@reusable/ReusableInput";
import ReusableButton from "@reusable/ReusableButton";
import ReusableIcon from "@reusable/ReusableIcon";
import Navigator from "@reusable/Navigator";
import usePasswordVisibility from "@hooks/usePasswordVisibility";

const UserRegisteration = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

    const confirmedPassword = formData.get("confirm-password");

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
          <ReusableInput
            labelName="Firstname"
            inputType="text"
            name={firstname}
            placeholder="Enter your firstname"
            onChange={(e) => setFirstname(e.target.value)}
          />

          {/* Input for lastname */}
          <ReusableInput
            labelName="Lastname"
            inputType="text"
            name={lastname}
            placeholder="Enter your lastname"
            onChange={(e) => setLastname(e.target.value)}
          />

          {/* Input for username */}
          <ReusableInput
            labelName="Username"
            inputType="text"
            name={username}
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* Input for email */}
          <ReusableInput
            labelName="Email"
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

          {/* Input for confirm password */}
          <div className="password-input">
            <ReusableInput
              labelName="Confirm password"
              inputType={showPassword ? "text" : "password"}
              name={confirmPassword}
              placeholder="Confirm your password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {/* Reusable Icon component for displaying icons and making the password visibale */}
            <ReusableIcon
              library="fa"
              name={showPassword ? "FaEyeSlash" : "FaEye"}
              className="hide-and-show-pass"
              onClick={togglePasswordVisibility}
            />
          </div>
          <ReusableButton name="Register" />

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
