export const logBuddy = (message = "logBuddy", data) => {
  if (import.meta.env.MODE === "development") {
    console.log("LogBuddy 🚀 ", message, data || "");
  }
};

export const logError = (message = "Error", error) => {
  console.error("LogError 👎 😭", message, error);
};

export const handleUnauthorizedError = (error, setError) => {
  if (error.response && error.response.status === 401) {
    if (error.response.data.error === "Invalid credentials") {
      // Handle specific "Invalid credentials" error case
      setError("Invalid credentials");
      logError("Unauthorized: Invalid credentials", error);
    } else {
      // Handle other 401 errors
      setError("Unauthorized: General error");
      logError("Unauthorized: General error", error);
      // Example: Redirect to logout or handle session expiration
      // window.location.href = "/user-logout";
    }
  } else {
    // Handle other types of errors or pass them along
    throw error;
  }
};

export const handleNotFoundError = (error, setError) => {
  if (error.response && error.response.status === 404) {
    // Handle 404 errors as needed
    setError("Not Found Error");
    logError("Not Found Error", error);
  } else {
    throw error;
  }
};

export const handleServerError = (error, setError) => {
  if (
    error.response &&
    error.response.status >= 500 &&
    error.response.status < 600
  ) {
    setError("Server error");
    logError("Server Error", error);
    // Handle server errors, e.g., show a generic error message
    // Example: Notify the user that there's a server issue
  } else {
    throw error;
  }
};

export const handleNetworkError = (error, setError) => {
  if (!error.response) {
    setError("Network Error");
    logError("Network Error", error);
    // Handle network errors, e.g., notify the user of a connection issue
    // Example: Show a toast message indicating network problems
  } else {
    throw error;
  }
};
