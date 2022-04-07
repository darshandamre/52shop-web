import axios from "axios";
import { useMutation } from "react-query";
import { queryClient } from "../queryClient";
import { API } from "../utils/constants";
import { getToken } from "../utils/token";

export const useMoveToWishlistMutation = () =>
  useMutation(
    async productId => {
      const res = await axios.post(
        `${API}/user/move-to-wishlist/${productId}`,
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
      onSuccess: (data, productId) =>
        queryClient.setQueryData("user", ({ user }) => {
          const { wishlist, cart } = user ?? {};
          if (data?.created) {
            return {
              user: {
                ...user,
                cart: cart?.filter(item => item.id !== productId),
                wishlist: [data?.product, ...wishlist]
              }
            };
          }

          return {
            user: {
              ...user,
              cart: cart?.filter(item => item.id !== productId)
            }
          };
        })
    }
  );
