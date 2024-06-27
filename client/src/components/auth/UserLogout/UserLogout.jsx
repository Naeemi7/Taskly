import { useEffect, useRef } from "react";
import useNavigation from "@hooks/useNavigation";
import { logError, handleError } from "@utils/errorUtils";
import ShowToast from "@reusable/Toast";
import useUserContext from "@hooks/useUserContext";

const UserLogout = () => {
  const { goTo } = useNavigation();
  const { logoutUser, setError } = useUserContext();
  const hasToastShown = useRef(false);

  useEffect(() => {
    const handleLogout = async () => {
      try {
        // Perform logout operation
        await logoutUser();

        // Display success toast if not already shown
        if (!hasToastShown.current) {
          ShowToast("Logged out successfully", "success");
          hasToastShown.current = true;
        }

        // Navigate to login page after delay
        setTimeout(() => {
          goTo("/user-login");
        }, 1500);
      } catch (error) {
        // Handle errors during logout
        if (!error.handled) {
          error.handled = true;
          logError("Logout failed", error);
          handleError(error, setError); // Ensure handleError is called only once
        }
      }
    };

    // Call handleLogout function when component mounts
    handleLogout();

    // Cleanup function can be omitted since there are no subscriptions or timers
  }, [logoutUser, goTo, setError]);

  return null; // UserLogout component renders null
};

export default UserLogout;
