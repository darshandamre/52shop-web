import axios from "axios";
import { useQuery } from "react-query";
import { API } from "../utils/constants";
import { getToken } from "../utils/token";

export const useUserQuery = () =>
  useQuery(
    "user",
    async () => {
      const res = await axios.get(`${API}/user/get-info`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      });
      return res.data;
    },
    {
      enabled: !!getToken()
    }
  );
