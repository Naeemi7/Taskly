import api from "./axiosConfig";
import {
  handleUnauthorizedError,
  handleNotFoundError,
  handleServerError,
  handleNetworkError,
  logError,
} from "@utils/errorUtils";

// Reusable function to handle requests
const service = async (method, url, data = null, setError) => {
  try {
    const response = await api({
      method: method,
      url: url,
      data: data,
    });
    return response.data;
  } catch (error) {
    // Pass the error to specific error handlers based on the error type
    handleUnauthorizedError(error, setError);
    handleNotFoundError(error, setError);
    handleServerError(error, setError);
    handleNetworkError(error, setError);

    // Log any other errors
    logError("API Error:", error);
  }
};

// GET request
export const get = async (url, setError) => {
  return service("get", url, null, setError);
};

// POST request
export const post = async (url, data, setError) => {
  return service("post", url, data, setError);
};

// PUT request
export const put = async (url, data, setError) => {
  return service("put", url, data, setError);
};

// DELETE request
export const remove = async (url, setError) => {
  return service("delete", url, setError);
};

// PATCH request
export const patch = async (url, data, setError) => {
  return service("patch", url, data, setError);
};
