import ShowToast from "@reusable/Toast";

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

// Set to track shown error message
const shownErrors = new Set();

export const handleError = (error, setError) => {
  let errorMessage = "";

  if (!error.response) {
    errorMessage = "Network Error";
  } else {
    const { status, data } = error.response;

    switch (status) {
      case 401:
        errorMessage =
          data.message === "Incorrect password"
            ? "Incorrect password"
            : "Unauthorized: General error";
        break;
      case 404:
        errorMessage = "Email not found";
        break;
      case 500:
        errorMessage = "Server error";
        break;
      default:
        errorMessage = data.error || "An error occurred";
    }
  }
  setError(errorMessage); // Set error message to state

  // Check if the error message has been shown already
  if (!shownErrors.has(errorMessage)) {
    ShowToast(errorMessage, "error"); // Show toast with the error message
    shownErrors.add(errorMessage); // Add the error message to the set
  } else {
    // Clear shownErrors after 5 seconds (adjust as needed)
    setTimeout(() => {
      shownErrors.delete(errorMessage);
    }, 5000);
  }
};
