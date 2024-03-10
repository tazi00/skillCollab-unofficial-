import toast from "react-hot-toast";
import APIClient from "./apiClient";

const apiClient = new APIClient();

// Example usage: login
async function login(email: string, password: string) {
  try {
    const user = await apiClient.login(email, password);
    if (user) {
      // Login successful, do something with the user data
      toast.success("Login SuccessFully");
      return user;
    } else {
      // Login failed, handle error or show error message
      throw new Error("Login failed");
    }
  } catch (error) {
    // Handle error from login API call
    toast.error(error.message);
    console.error("Error logging in:", error);
    return error;
  }
}

export { login };
