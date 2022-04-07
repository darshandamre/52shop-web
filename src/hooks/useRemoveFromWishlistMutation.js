import axios from "axios";
import { useMutation } from "react-query";
import { queryClient } from "../queryClient";
import { API } from "../utils/constants";
import { getToken } from "../utils/token";

export const useRemoveFromWishlistMutation = () =>
  useMutation(
    async productId =>
      await axios.delete(`${API}/user/wishlist/${productId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      }),
    {
      onError: err => console.error(err),
      onSuccess: (_, productId) =>
        queryClient.setQueryData("user", ({ user }) => ({
          user: {
            ...user,
            wishlist: user?.wishlist?.filter(item => item.id !== productId)
          }
        }))
    }
  );
