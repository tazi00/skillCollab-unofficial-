import { useQuery } from "@tanstack/react-query";
import { getDataFromLocal } from "../Utils/localfunc";
import { userService } from "../Services";

export default function useUser() {
  const id = getDataFromLocal("userId");
  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["authUser"],
    queryFn: () => userService.getUserProfile(id),
  });
  return { user, isLoading, isError, error };
}
