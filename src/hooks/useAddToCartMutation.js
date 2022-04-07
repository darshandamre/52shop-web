import axios from "axios";
import { useMutation } from "react-query";
import { queryClient } from "../queryClient";
import { API } from "../utils/constants";
import { getToken } from "../utils/token";

export const useAddToCartMutation = () =>
  useMutation(
    async productId => {
      const res = await axios.post(
        `${API}/user/cart/${productId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${getToken()}`
          }
        }
      );
      return res.data;
    },
    {
      onError: err => console.error(err),
      onSuccess: ({ product, created }) => {
        if (!created) return;

        queryClient.setQueryData("user", ({ user }) => ({
          user: {
            ...user,
            cart: [product, ...user.cart]
          }
        }));
      }
    }
  );
