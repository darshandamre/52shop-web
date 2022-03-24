import axios from "axios";
import { useQuery } from "react-query";
import { API } from "../utils/constants.js";

export const useProductsQuery = () =>
  useQuery(
    "products",
    async () => {
      const res = await axios(`${API}/products`);
      return res.data;
    },
    {
      staleTime: Infinity
    }
  );
