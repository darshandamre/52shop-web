import React from "react";
import { useLocation } from "react-router-dom";
import { WishlistIconButton } from "../../components";
import "./Card.css";

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

        <button className="btn">Add to Cart</button>
      </div>
    </div>
  );
};

export { Card };
