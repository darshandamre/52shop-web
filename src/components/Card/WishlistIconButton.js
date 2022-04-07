import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useAddToWishlistMutation,
  useRemoveFromWishlistMutation,
  useUserQuery
} from "../../hooks";

const WishlistIconButton = ({ productId }) => {
  const { data } = useUserQuery();
  const navigate = useNavigate();
  const location = useLocation();

  const { mutate: addToWishlist } = useAddToWishlistMutation();
  const { mutate: removeFromWishlist } = useRemoveFromWishlistMutation();

  const wishlisted = data?.user?.wishlist?.some(item => item.id === productId);

  const wishlistHandler = () => {
    if (!data?.user?.id)
      return navigate("/login", { state: { from: location } });
    wishlisted ? removeFromWishlist(productId) : addToWishlist(productId);
  };

  return (
    <div className="card__fav" onClick={wishlistHandler}>
      <i className={`${wishlisted ? "fa-solid" : "fa-regular"} fa-heart`}></i>
    </div>
  );
};

export { WishlistIconButton };
