import React from "react";
import { useNavigate } from "react-router-dom";
import {
  useAddToWishlistMutation,
  useRemoveFromWishlistMutation,
  useUserQuery
} from "../../hooks";
import "./WishlistIconButton.css";

const WishlistIconButton = ({ productId }) => {
  const { data } = useUserQuery();
  const { user } = data ?? {};
  const navigate = useNavigate();

  const { mutate: addToWishlist } = useAddToWishlistMutation();
  const { mutate: removeFromWishlist } = useRemoveFromWishlistMutation();

  const wishlisted = user?.wishlist?.some(item => item.id === productId);

  const wishlistHandler = () => {
    if (!user?.id) return navigate("/login");
    wishlisted ? removeFromWishlist(productId) : addToWishlist(productId);
  };

  return (
    <div className="card__fav" onClick={wishlistHandler}>
      <i className={`${wishlisted ? "fa-solid" : "fa-regular"} fa-heart`}></i>
    </div>
  );
};

export { WishlistIconButton };
