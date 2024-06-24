import { useState } from "react";
import Input from "@reusable/Input";
import Button from "@reusable/Button";
import Icon from "@reusable/Icon";
import Navigator from "@reusable/Navigator";

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
          <Input
            labelName="Firstname"
            inputType="text"
            inputValue={firstname}
            placeholder="Enter your firstname"
            onChange={(e) => setFirstname(e.target.value)}
          />

          {/* Input for lastname */}
          <Input
            labelName="Lastname"
            inputType="text"
            inputValue={lastname}
            placeholder="Enter your lastname"
            onChange={(e) => setLastname(e.target.value)}
          />

          {/* Input for username */}
          <Input
            labelName="Username"
            inputType="text"
            inputValue={username}
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* Input for email */}
          <Input
            labelName="Email"
            inputType="email"
            inputValue={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Input for password */}
          <Input
            labelName="Password"
            inputType="password"
            inputValue={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Input for confirm password */}
          <Input
            labelName="Confirm password"
            inputType="password"
            inputValue={confirmPassword}
            placeholder="Confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

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
