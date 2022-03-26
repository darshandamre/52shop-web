import React from "react";
import { useAddToWishlistMutation } from "../../hooks/useAddToWishlistMutation";
import { useRemoveFromWishlistMutation } from "../../hooks/useRemoveFromWishlistMutation";
import "./Card.css";

const Card = ({ product, wishlisted }) => {
  const { mutate: addToWishlist } = useAddToWishlistMutation();
  const { mutate: removeFromWishlist } = useRemoveFromWishlistMutation();

  const { id, name, price, pictureLink } = product;
  return (
    <div className="card">
      <div
        className="card__fav"
        onClick={() =>
          wishlisted ? removeFromWishlist(id) : addToWishlist(id)
        }>
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
