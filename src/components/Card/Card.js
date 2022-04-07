import React from "react";
import { useLocation } from "react-router-dom";
import "./Card.css";
import { CardButtons } from "./CardButtons";
import { WishlistIconButton } from "./WishlistIconButton";

const Card = ({ product }) => {
  const { pathname } = useLocation();
  const { id, name, price, discount, pictureLink, cartItem } = product;

  return (
    <div className={`card ${pathname === "/cart" ? "card--horizontal" : ""}`}>
      <WishlistIconButton productId={id} />
      <img className="card__image" src={pictureLink} alt={name} />
      <div className="card__content">
        <h2 className="card__title">{name}</h2>
        <h3 className="card__subtitle">
          ₹ {price - discount}{" "}
          <span className="card__subtitle--canceled">{price}</span>
        </h3>

        <p className="quantity__info">
          Quantity: <i className="px-1 fa-solid fa-circle-minus"></i>
          {cartItem?.quantity}
          <i className="px-1 fa-solid fa-circle-plus"></i>
        </p>

        <CardButtons productId={id} />
      </div>
    </div>
  );
};

export { Card };
