import axios from "axios";
import { useMutation } from "react-query";
import { API } from "../utils/constants";

export const useSignupMutation = () => {
  const mutation = useMutation(async body => {
    const res = await axios.post(`${API}/auth/signup`, body);
    return res.data;
  });

  return mutation;
};
