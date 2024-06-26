import showToast from "@reusable/Toast";

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

export const handleError = (error, setError) => {
  if (!error.response) {
    const errorMessage = "Network Error";
    setError(errorMessage);
    logError(errorMessage, error);
    showToast(errorMessage, "error");
    return;
  }

  const { status, data } = error.response;

  let errorMessage = data.error || "An error occurred";

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
      break;
  }

  setError(errorMessage);
  logError(errorMessage, error);
  showToast(errorMessage, "error");
};
