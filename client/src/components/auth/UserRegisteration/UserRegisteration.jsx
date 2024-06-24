import { useState } from "react";
import ReusableInput from "@reusable/ReusableInput";
import ReusableButton from "@reusable/ReusableButton";
import ReusableIcon from "@reusable/ReusableIcon";
import ReusableNavigator from "@reusable/ReusableNavigator";

const UserRegisteration = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(false);
  return (
    <div className="main-container">
      <div className="user-registeration-container">
        <h2>Registeration</h2>

        <form>
          {/* Input for the firstname */}
          <ReusableInput
            labelName="Firstname"
            inputType="text"
            inputValue={firstname}
            placeholder="Enter your firstname"
            onChange={(e) => setFirstname(e.target.value)}
          />

          {/* Input for lastname */}
          <ReusableInput
            labelName="Lastname"
            inputType="text"
            inputValue={lastname}
            placeholder="Enter your lastname"
            onChange={(e) => setLastname(e.target.value)}
          />

          {/* Input for username */}
          <ReusableInput
            labelName="Username"
            inputType="text"
            inputValue={username}
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* Input for email */}
          <ReusableInput
            labelName="Email"
            inputType="email"
            inputValue={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Input for password */}
          <ReusableInput
            labelName="Password"
            inputType="password"
            inputValue={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Input for confirm password */}
          <ReusableInput
            labelName="Confirm password"
            inputType="password"
            inputValue={confirmPassword}
            placeholder="Confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <ReusableButton name="Register" />

          <ReusableNavigator
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
