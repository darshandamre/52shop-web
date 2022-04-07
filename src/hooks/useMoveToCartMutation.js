import axios from "axios";
import { useMutation } from "react-query";
import { queryClient } from "../queryClient";
import { API } from "../utils/constants";
import { getToken } from "../utils/token";

export const useMoveToCartMutation = () =>
  useMutation(
    async productId => {
      const res = await axios.post(
        `${API}/user/move-to-cart/${productId}`,
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
                wishlist: wishlist?.filter(item => item.id !== productId),
                cart: [data?.product, ...cart]
              }
            };
          }

          return {
            user: {
              ...user,
              wishlist: user?.wishlist?.filter(item => item.id !== productId),
              cart: user?.cart?.map(item =>
                item.id === productId ? data?.product : item
              )
            }
          };
        })
    }
  );
