import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { API } from "../utils/constants";
import { getToken } from "../utils/token";

export const useRemoveFromWishlistMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async productId => {
      await axios.delete(`${API}/user/wishlist/${productId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      });
    },
    {
      onError: err => console.error(err),
      onSuccess: (_, productId) =>
        queryClient.setQueryData("user", ({ user }) => ({
          user: {
            ...user,
            wishlist: user.wishlist.filter(
              wishlistItem => wishlistItem.id !== productId
            )
          }
        }))
    }
  );
};
