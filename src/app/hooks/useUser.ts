import { getUserInfoFromToken } from "@/app/Utils/localfunc";
import { useQuery } from "@tanstack/react-query";

function useUser() {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUserInfoFromToken,
  });
  // console.log();

  // Check if the data contains user authentication information
  const isAuthenticated = data?.type === "access";

  return { isLoading, data, isAuthenticated };
}

export default useUser;
