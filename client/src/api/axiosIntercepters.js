import { api } from "./axiosConfig";
import { logBuddy, logError } from "@utils/errorUtils";

// Function to step intercepters
export const setupInterceptors = () => {
  // Request intercepters
  api.interceptors.request.use(
    (req) => {
      logBuddy(" A request has been made");
      return req;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response intercepters
  api.interceptors.response.use(
    (res) => {
      logBuddy("A response has been recieved");
      return res;
    },
    (error) => {
      logError("Error response has been recieved", error.response);

      // Handle 401 errors
      if (error.response && error.response.status === 401) {
        if (error.response.data.error === "Invalid credentials") {
          // Do nothing for 'invalid credentials' error
          logError("401 intercepter exeption: invalid credentials");
        } else {
          // Handle other 401 errors
          logError("401 intercepter:", error.response.data.error);
          window.location.href = "/user-logout";

          return Promise.reject(error);
        }
      }

      return Promise.reject(error);
    }
  );
};
