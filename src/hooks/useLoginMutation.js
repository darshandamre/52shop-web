import axios from "axios";
import { useMutation } from "react-query";
import { API } from "../utils/constants";

export const useLoginMutation = () =>
  useMutation(async body => {
    const res = await axios.post(`${API}/auth/login`, body);
    return res.data;
  });
