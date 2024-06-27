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

    // Log the entire data for debugging purposes
    console.log("Error data:", data);

    // Handle errors based on status codes or specific error codes from backend
    switch (status) {
      case 400:
        if (data.errors && data.errors.length > 0) {
          // Iterate through each error in data.errors
          data.errors.forEach((errorItem) => {
            switch (errorItem.code) {
              case "01":
                errorMessage = "Names should only contain letters";
                break;
              case "02":
                errorMessage = "Username is already taken";
                break;
              case "03":
                errorMessage = "Email is already registered";
                break;
              case "04":
                errorMessage = "Password doesn't meet the requirements";
                break;
              default:
                errorMessage = errorItem.msg || "Validation error";
                break;
            }

            // Set error message to state
            setError(errorMessage);

            // Show toast with the error message if it hasn't been shown already
            if (!shownErrors.has(errorMessage)) {
              ShowToast(errorMessage, "error");
              shownErrors.add(errorMessage);
            } else {
              // Clear shownErrors after 5 seconds (adjust as needed)
              setTimeout(() => {
                shownErrors.delete(errorMessage);
              }, 5000);
            }
          });
        } else {
          // Handle generic 400 error
          errorMessage = data.error || "Validation error";
          setError(errorMessage);

          // Show toast with the error message if it hasn't been shown already
          if (!shownErrors.has(errorMessage)) {
            ShowToast(errorMessage, "error");
            shownErrors.add(errorMessage);
          } else {
            // Clear shownErrors after 5 seconds (adjust as needed)
            setTimeout(() => {
              shownErrors.delete(errorMessage);
            }, 5000);
          }
        }
        break;
      case 401:
        errorMessage =
          data.message === "Incorrect password"
            ? "Incorrect password"
            : "Unauthorized: General error";
        setError(errorMessage);
        if (!shownErrors.has(errorMessage)) {
          ShowToast(errorMessage, "error");
          shownErrors.add(errorMessage);
        } else {
          setTimeout(() => {
            shownErrors.delete(errorMessage);
          }, 5000);
        }
        break;
      case 404:
        errorMessage = "Email not found";
        setError(errorMessage);
        if (!shownErrors.has(errorMessage)) {
          ShowToast(errorMessage, "error");
          shownErrors.add(errorMessage);
        } else {
          setTimeout(() => {
            shownErrors.delete(errorMessage);
          }, 5000);
        }
        break;
      case 500:
        errorMessage = "Server error";
        setError(errorMessage);
        if (!shownErrors.has(errorMessage)) {
          ShowToast(errorMessage, "error");
          shownErrors.add(errorMessage);
        } else {
          setTimeout(() => {
            shownErrors.delete(errorMessage);
          }, 5000);
        }
        break;
      default:
        errorMessage = data.error || "An error occurred";
        setError(errorMessage);
        if (!shownErrors.has(errorMessage)) {
          ShowToast(errorMessage, "error");
          shownErrors.add(errorMessage);
        } else {
          setTimeout(() => {
            shownErrors.delete(errorMessage);
          }, 5000);
        }
        break;
    }
  }
};
