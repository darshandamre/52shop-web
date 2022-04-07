import axios from "axios";
import { useMutation } from "react-query";
import { queryClient } from "../queryClient";
import { API } from "../utils/constants";
import { setToken } from "../utils/token";

export const useLoginMutation = () =>
  useMutation(
    async body => {
      const res = await axios.post(`${API}/auth/login`, body);
      return res.data;
    },
    {
      onError: err => console.error(err),
      onSuccess: ({ token, user }) => {
        setToken(token);
        queryClient.setQueryData("user", { user });
        queryClient.invalidateQueries("user", {
          refetchActive: true,
          refetchInactive: true
        });
      }
    }
  );
