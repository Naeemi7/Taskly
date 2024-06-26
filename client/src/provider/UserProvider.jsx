import { useState } from "react";
import PropTypes from "prop-types";
import UserContext from "@context/UserContext";
import { post } from "@api/apiService";
import { logBuddy, logError } from "@utils/errorUtils";

export default function UserProvider({ children }) {
  const storedUser = JSON.parse(localStorage.getItem("user")) || null;

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(storedUser);
  const [error, setError] = useState("");

  const loginUser = async (data) => {
    try {
      const response = await post("/user/login", data, setError);
      logBuddy(response.user);
      setUser(response.user);
      setIsLoggedIn(true);
      localStorage.setItem("user", JSON.stringify(response.user));
    } catch (error) {
      logError("Login Error:", error);
      setError(
        error.response?.data?.error ||
          error.message ||
          "An error occurred during login"
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
