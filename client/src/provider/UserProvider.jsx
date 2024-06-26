import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import UserContext from "@context/UserContext";
import { post, get } from "@api/apiService";
import { logBuddy, logError } from "@utils/errorUtils";

export default function UserProvider({ children }) {
  // Retrieve stored user information from localStorage
  const storedUser = JSON.parse(localStorage.getItem("user")) || null;

  const [isLoggedIn, setIsLoggedIn] = useState(!!storedUser);
  const [user, setUser] = useState(storedUser);
  const [error, setError] = useState("");

  /**
   * Handler function for user login
   * @param {*} data
   */
  const loginUser = async (data) => {
    try {
      // Make POST request to login endpoint
      const response = await post("/user/login", data, setError);

      // Update state and localStorage with logged-in user data
      logBuddy(response.user);
      setUser(response.user);

      setIsLoggedIn(true);
      localStorage.setItem("user", JSON.stringify(response.user));
    } catch (error) {
      // Handle login errors
      setIsLoggedIn(false);
      logError("Login Error:", error);
      setError(
        error.response?.data?.error ||
          error.message ||
          "An error occurred during login"
      );
      throw error;
    }
  };

  /**
   * useEffect hook to check stored user data on component mount
   * and handle logout if no user data is found
   */
  useEffect(() => {
    if (!storedUser) {
      setIsLoggedIn(false);
      setUser(null);
      localStorage.removeItem("user");
    }
  }, [storedUser]);

  const logoutUser = async () => {
    try {
      await get("/user/logout");

      // Update state and remove user data from localStorage after logout
      setIsLoggedIn(false);
      localStorage.removeItem("user");
      logBuddy("Logout successfully done");
    } catch (error) {
      setError("Logout Error", error);
      setError(
        error.response?.data.error ||
          error.message ||
          "An error occurred during logout"
      );
      throw error;
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
        logoutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
