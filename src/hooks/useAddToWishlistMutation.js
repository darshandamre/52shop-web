import axios from "axios";
import { useMutation } from "react-query";
import { queryClient } from "../queryClient";
import { API } from "../utils/constants";
import { getToken } from "../utils/token";

export const useAddToWishlistMutation = () =>
  useMutation(
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
            wishlist: [product, ...user.wishlist]
          }
        }))
    }
  );
