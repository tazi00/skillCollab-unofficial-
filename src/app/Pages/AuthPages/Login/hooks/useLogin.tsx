import { authService } from "@/app/Services";
import { setDataToLocal } from "@/app/Utils/localfunc";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

function useLogin() {
  const {
    mutate: login,
    isError,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      authService.login(email, password),

    onMutate: () => {
      toast.loading("Logging in...");
    },
    onSuccess: (data) => {
      toast.dismiss();
      if (data?.response?.status === 400) {
        toast.error(data?.response?.data?.message);
        console.log("error occursed");
      }
      if (data?.code === 200) {
        setDataToLocal("userId", data?.data?._id);
        window.location.reload();
        toast.success("Login Successfully");
      }
      console.log(data);
    },
    onError: (error) => {
      console.error("Error occurred during login:", error);
      toast.error("An error occurred during login");
    },
  });
  return { isError, isPending, isSuccess, login };
}

export default useLogin;
