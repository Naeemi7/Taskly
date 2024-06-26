import { useState } from "react";
import PropTypes from "prop-types";
import UserContext from "@context/UserContext";
import { post } from "@api/apiService";
import { logBuddy, logError } from "@utils/errorUtils";

export default function UserProvider({ children }) {
  // Retrive the user data from localStroage
  const storedUser = JSON.parse(localStorage.getItem("user")) || null;

  // State variables for user authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(storedUser);
  const [error, setError] = useState("");

  const loginUser = async (data) => {
    try {
      // CLear previous errors
      setError("");

      const response = await post("/user/login", data, setError);
      logBuddy(response.user);

      // Update state and localStorage on successful login
      setUser(response.user);
      setIsLoggedIn(true);
      localStorage.setItem("user", JSON.stringify(response.user));
    } catch (error) {
      // Log any unexpected errors
      logError("Login Error:", error);
    }
  };
  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        error,
        setError,
        loginUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
