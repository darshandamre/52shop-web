import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { API } from "../utils/constants";
import { getToken } from "../utils/token";

export const useAddToWishlistMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async productId => {
      const res = await axios.post(`${API}/user/wishlist/${productId}`, null, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      });
      return res.data;
    },
    {
      onError: err => console.error(err),
      onSuccess: ({ product }) =>
        queryClient.setQueryData("user", ({ user }) => ({
          user: {
            ...user,
            wishlist: [...user.wishlist, product]
          }
        }))
    }
  );
};
