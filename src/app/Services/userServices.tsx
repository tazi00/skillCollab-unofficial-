import toast from "react-hot-toast";
import APIClient from "./apiClient";

const apiClient = new APIClient();

async function getUserById(id: string) {
  try {
    const user = await apiClient.getUserProfile(id);
    if (user) {
      //   toast.success("Login SuccessFully");
      console.log(user);

      return user;
    } else {
      throw new Error("not fetched");
    }
  } catch (error) {
    // Handle error from login API call
    toast.error(error.message);
    console.error("Error user", error);
    return error;
  }
}

export { getUserById };
