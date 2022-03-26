import React from "react";
import { useNavigate } from "react-router-dom";
import { useAddToWishlistMutation } from "../../hooks/useAddToWishlistMutation";
import { useRemoveFromWishlistMutation } from "../../hooks/useRemoveFromWishlistMutation";
import { useUserQuery } from "../../hooks/useUserQuery";
import "./Card.css";

const Card = ({ product }) => {
  const { mutate: addToWishlist } = useAddToWishlistMutation();
  const { mutate: removeFromWishlist } = useRemoveFromWishlistMutation();
  const { data } = useUserQuery();
  const { user } = data ?? {};
  const navigate = useNavigate();

  const { id, name, price, pictureLink } = product;

  const wishlisted = user?.wishlist?.some(
    wishlistItem => wishlistItem.id === id
  );

  const wishlistHandler = () => {
    if (!user?.id) {
      return navigate("/signup");
    }

    return wishlisted ? removeFromWishlist(id) : addToWishlist(id);
  };

  return (
    <div className="card">
      <div className="card__fav" onClick={wishlistHandler}>
        <i className={`${wishlisted ? "fa-solid" : "fa-regular"} fa-heart`}></i>
      </div>
      <img className="card__image" src={pictureLink} alt={name} />
      <div className="card__content">
        <h2 className="card__title">{name}</h2>
        <h3 className="card__subtitle">₹ {price}</h3>
        <button className="btn">Move to Cart</button>
      </div>
    </div>
  );
};

export { Card };
