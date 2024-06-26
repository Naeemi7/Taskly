import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logError, handleError } from "@utils/errorUtils";
import showToast from "@reusable/Toast";
import useUserContext from "@hooks/useUserContext";

const UserLogout = () => {
  const navigate = useNavigate();
  const { logoutUser, setError } = useUserContext();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        // Perform logout operation
        await logoutUser();

        // Display success toast
        showToast("Logged out successfully", "success");

        // Navigate to login page after delay
        setTimeout(() => {
          navigate("/user-login");
        }, 1500);
      } catch (error) {
        // Handle errors during logout
        logError("Logout failed", error);
        // handleError(error, setError);
      }
    };

    // Call handleLogout function when component mounts
    handleLogout();

    // Cleanup function can be omitted since there are no subscriptions or timers
  }, [logoutUser, navigate, setError]);

  return null; // UserLogout component renders null
};

export default UserLogout;
