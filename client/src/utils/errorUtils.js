export const logBuddy = (message = "logBuddy", data) => {
  if (import.meta.env.MODE === "development") {
    console.log("LogBuddy 🚀 ", message, data || "");
  }
};

export const logError = (message = "Error", error) => {
  if (import.meta.env.MODE === "development") {
    console.error("LogError 👎 😭", message, error);
  }
};

export const handleUnauthorizedError = (error, setError) => {
  if (error.response && error.response.status === 401) {
    const errorMessage =
      error.response.data.error || "Unauthorized: General error";
    setError(errorMessage);
    logError(errorMessage, error);
  } else {
    throw error;
  }
};

export const handleNotFoundError = (error, setError) => {
  if (error.response && error.response.status === 404) {
    const errorMessage = error.response.data.error || "The user is Not Found";
    setError(errorMessage);
    logError(errorMessage, error);
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
    const errorMessage = error.response.data.error || "Server error";
    setError(errorMessage);
    logError(errorMessage, error);
  } else {
    throw error;
  }
};

export const handleNetworkError = (error, setError) => {
  if (!error.response) {
    const errorMessage = "Network Error";
    setError(errorMessage);
    logError(errorMessage, error);
  } else {
    throw error;
  }
};
