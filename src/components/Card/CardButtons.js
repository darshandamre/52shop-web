import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useAddToCartMutation,
  useMoveToCartMutation,
  useMoveToWishlistMutation,
  useRemoveFromCartMutation,
  useUserQuery
} from "../../hooks";

const CardButtons = ({ productId }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { data } = useUserQuery();

  const { mutate: addToCart, isSuccess: isAddedToCart } =
    useAddToCartMutation();
  const { mutate: removeFromCart } = useRemoveFromCartMutation();
  const { mutate: moveToCart } = useMoveToCartMutation();
  const { mutate: moveToWishlist } = useMoveToWishlistMutation();

  switch (pathname) {
    case "/cart":
      return (
        <>
          <button className="btn" onClick={() => removeFromCart(productId)}>
            Remove from Cart
          </button>
          <button
            onClick={() => moveToWishlist(productId)}
            className="btn card__btn--outline">
            Move to wishlist
          </button>
        </>
      );

    case "/wishlist":
      return (
        <button className="btn" onClick={() => moveToCart(productId)}>
          Move to Cart
        </button>
      );

    default:
      return isAddedToCart ? (
        <button className="btn btn--primary" onClick={() => navigate("/cart")}>
          Go to Cart
        </button>
      ) : (
        <button
          className="btn"
          onClick={() => {
            if (!data?.user?.id) return navigate("/login");
            addToCart(productId);
          }}>
          Add to Cart
        </button>
      );
  }
};

export { CardButtons };
