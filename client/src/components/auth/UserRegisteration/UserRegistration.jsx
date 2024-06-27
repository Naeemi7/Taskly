import { useState } from "react";
import Input from "@reusable/Input";
import useNavigation from "@hooks/useNavigation";
import Button from "@reusable/Button";
import Icon from "@reusable/Icon";
import AuthLink from "@reusable/AuthLink";
import usePasswordVisibility from "@hooks/usePasswordVisibility";
import { post } from "@api/apiService";
import { logBuddy, logError, handleError } from "@utils/errorUtils";
import useUserContext from "@hooks/useUserContext";
import AlertBox from "@reusable/AlertBox";
import ShowToast from "@reusable/Toast"; // Assuming this is correctly implemented

const UserRegistration = () => {
  const [passwordMatched, setPasswordMatched] = useState(true);
  const { goTo } = useNavigation();
  const { showPassword, togglePasswordVisibility } = usePasswordVisibility();
  const { setError, error } = useUserContext();

  const handleRegistration = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
      username: formData.get("username"),
      password: formData.get("password"),
    };

    const confirmedPassword = formData.get("confirm-password");

    if (data.password !== confirmedPassword) {
      setPasswordMatched(false);
      return;
    } else {
      setPasswordMatched(true);
    }

    setError(""); // Clear previous error before registration attempt
    try {
      const response = await post("/user/register", data, setError);
      logBuddy("Registration response:", response); // Use console.log or logBuddy as needed

      ShowToast("Registered successfully!", "success");

      setTimeout(() => {
        goTo("/user-login");
      }, 1500);
    } catch (error) {
      // Ensure handleError is called only once and doesn't cause multiple toasts
      if (!error.handled) {
        error.handled = true;
        handleError(error, setError);
        logError("Registration error:", error);
      }
    }
  };

  return (
    <div className="main-container">
      <div className="user-registration-container">
        <h2>Registration</h2>

        <form onSubmit={handleRegistration}>
          <Input
            labelName="Firstname"
            type="text"
            name="firstname"
            placeholder="Enter your firstname"
            required
          />

          <Input
            labelName="Lastname"
            type="text"
            name="lastname"
            placeholder="Enter your lastname"
            required
          />

          <Input
            labelName="Username"
            type="text"
            name="username"
            placeholder="Enter your username"
            required
          />

          <Input
            labelName="Email"
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

          <div className="password-input">
            <Input
              labelName="Confirm password"
              type={showPassword ? "text" : "password"}
              name="confirm-password"
              placeholder="Confirm your password"
              required
            />

            <Icon
              library="fa"
              name={showPassword ? "FaEyeSlash" : "FaEye"}
              className="hide-and-show-pass"
              onClick={togglePasswordVisibility}
            />
          </div>

          {(!passwordMatched && (
            <AlertBox message="Passwords do not match." />
          )) ||
            (error && <AlertBox message={error} type="error" />)}

          <Button name="Register" type="submit" />

          <AuthLink
            message="Already signed up? "
            pathName="Login"
            pathUrl="/user-login"
          />
        </form>
      </div>
    </div>
  );
};

export default UserRegistration;
