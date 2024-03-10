import { login } from "@/app/Services";
import { jwtDecoder } from "@/app/Utils/jwtDecoder";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, isError, isPending, isSuccess } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      login(email, password),

    onSuccess: (data) => {
      const userInfo = jwtDecoder(data.accessToken);
      queryClient.setQueryData(["user"], userInfo);
      navigate("/home", { replace: true });
    },
  });
  return { isError, isPending, isSuccess, mutate };
}

export default useLogin;
