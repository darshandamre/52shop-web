import axios from "axios";
import { useMutation } from "react-query";
import { API } from "../utils/constants";

export const useSignupMutation = () =>
  useMutation(async body => {
    const res = await axios.post(`${API}/auth/signup`, body);
    return res.data;
  });
