import axios from "axios";
import { useMutation } from "react-query";
import { queryClient } from "../queryClient";
import { API } from "../utils/constants";
import { getToken } from "../utils/token";

export const useDecrementQuantityMutation = () =>
  useMutation(
    async productId => {
      const res = await axios.post(
        `${API}/user/cart/decrement/${productId}`,
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
      onSuccess: ({ product }) =>
        queryClient.setQueryData("user", ({ user }) => ({
          user: {
            ...user,
            cart: user.cart.map(item =>
              item.id === product.id ? product : item
            )
          }
        }))
    }
  );
