import api from "./axiosConfig";
import {
  handleUnauthorizedError,
  handleNotFoundError,
  handleServerError,
  handleNetworkError,
  logError,
} from "@utils/errorUtils";

let errorMessage;

const service = async (method, url, data = null, setError) => {
  try {
    const response = await api({
      method: method,
      url: url,
      data: data,
    });
    return response.data;
  } catch (error) {
    logError("Full error object:", error);

    if (error.response) {
      switch (error.response.status) {
        case 401:
          handleUnauthorizedError(error, setError);
          break;
        case 404:
          handleNotFoundError(error, setError);
          break;
        case 500:
          handleServerError(error, setError);
          break;
        default:
          errorMessage = error.response.data.error || "An error occurred";
          setError(errorMessage);
          logError("Unhandled API Error:", error);
      }
    } else {
      handleNetworkError(error, setError);
    }
    throw error;
  }
};

// Exported functions for different HTTP methods
export const get = async (url, setError) => {
  return service("get", url, null, setError);
};

export const post = async (url, data, setError) => {
  return service("post", url, data, setError);
};

export const put = async (url, data, setError) => {
  return service("put", url, data, setError);
};

export const remove = async (url, setError) => {
  return service("delete", url, null, setError);
};

export const patch = async (url, data, setError) => {
  return service("patch", url, data, setError);
};
