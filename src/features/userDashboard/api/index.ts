import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { User } from "../type";

const fetchUsers = async (): Promise<User[]> => {
  const options: AxiosRequestConfig = {
    baseURL: `${import.meta.env.VITE_API_URL}/users`,
    method: "GET",
  };

  try {
    const response = await axios.request(options);

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      // Handle Axios errors
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        throw new Error(
          `Failed to fetch users: ${axiosError.response.status} ${axiosError.response.statusText}`
        );
      } else if (axiosError.request) {
        // The request was made but no response was received
        throw new Error(
          "Failed to fetch users: No response received from server"
        );
      } else {
        // Something happened in setting up the request that triggered an Error
        throw new Error(`Failed to fetch users: ${axiosError.message}`);
      }
    } else {
      // Handle non-Axios errors
      throw new Error("An unexpected error occurred while fetching users");
    }
  }
};

export { fetchUsers };
