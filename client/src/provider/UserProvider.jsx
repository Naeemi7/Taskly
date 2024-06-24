import { useState } from "react";
import PropTypes from "prop-types";
import UserContext from "@context/UserContext";

export default function UserProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
