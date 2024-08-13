import { useMutation } from "@tanstack/react-query";
import { logout } from "../http/api";
import { useAuthStore } from "../store";

const useLogoutMutate = () => {
  const { logout: logoutFromStore } = useAuthStore();

  const { mutate: logoutMutate } = useMutation({
    mutationKey: ["logout"],
    mutationFn: logout,
    onSuccess: async () => {
      logoutFromStore();
    },
  });

  return { logoutMutate };
};

export default useLogoutMutate;
