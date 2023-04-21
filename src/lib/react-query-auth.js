import { useCallback } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";

export const configureAuth = ({
  userKey = ["authenticated-user"],
  userFn,
  loginFn,
  logoutFn,
}) => {
  const useUser = (options) => useQuery(userKey, userFn, options);

  const useLogin = (options) => {
    const queryClient = useQueryClient();

    const setUser = useCallback(
      (data) => queryClient.setQueryData(userKey, data),
      [queryClient]
    );

    return useMutation({
      mutationFn: loginFn,
      ...options,
      onSuccess: (user, ...rest) => {
        setUser(user);
        options?.onSuccess?.(user, ...rest);
      },
    });
  };

  const useLogout = (options) => {
    const queryClient = useQueryClient();

    const setUser = useCallback(
      (data) => queryClient.setQueryData(userKey, data),
      [queryClient]
    );

    return useMutation({
      mutationFn: logoutFn,
      ...options,
      onSuccess: (...args) => {
        setUser(null);
        options?.onSuccess?.(...args);
      },
    });
  };

  return {
    useUser,
    useLogin,
    useLogout,
  };
};
