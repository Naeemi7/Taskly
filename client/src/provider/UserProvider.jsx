import { useState } from "react";
import PropTypes from "prop-types";
import UserContext from "@context/UserContext";
import { post } from "@api/apiService";
import { logBuddy, logError } from "@utils/errorUtils";

export default function UserProvider({ children }) {
  // Retrieve the user data from localStorage
  const storedUser = JSON.parse(localStorage.getItem("user")) || null;

  // State variables for user authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(storedUser);
  const [error, setError] = useState("");

  const loginUser = async (data) => {
    try {
      const response = await post("/api/user/login", data, setError);
      logBuddy(response.user);

      // Update state and localStorage on successful login
      setUser(response.user);
      setIsLoggedIn(true);
      localStorage.setItem("user", JSON.stringify(response.user));
    } catch (error) {
      // Log any unexpected errors
      logError("Login Error:", error);
      setError(error);

      console.log("I am from provider", error);
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
