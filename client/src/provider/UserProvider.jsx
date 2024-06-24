import { useState } from "react";
import PropTypes from "prop-types";
import UserContext from "@context/UserContext";

export default function UserProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  /**
   * Togles the password visibility for both Login and Registeration form
   */
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        showPassword,
        togglePasswordVisibility,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
