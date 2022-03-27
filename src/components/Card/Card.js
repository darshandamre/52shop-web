import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useAddToCartMutation,
  useAddToWishlistMutation,
  useDecrementQuantityMutation,
  useIncrementQuantityMutation,
  useMoveToCartMutation,
  useMoveToWishlistMutation,
  useRemoveFromCartMutation,
  useRemoveFromWishlistMutation,
  useUserQuery
} from "../../hooks";
import "./Card.css";

const Card = ({ product, page, horizontal = false }) => {
  const { mutate: addToWishlist } = useAddToWishlistMutation();
  const { mutate: removeFromWishlist } = useRemoveFromWishlistMutation();
  const { mutate: moveToWishlist } = useMoveToWishlistMutation();
  const { mutate: addToCart } = useAddToCartMutation();
  const { mutate: removeFromCart } = useRemoveFromCartMutation();
  const { mutate: moveToCart } = useMoveToCartMutation();
  const { mutate: incrementQuantity } = useIncrementQuantityMutation();
  const { mutate: decrementQuantity } = useDecrementQuantityMutation();
  const { data } = useUserQuery();
  const { user } = data ?? {};
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const { id, name, price, discount, pictureLink, cartItem } = product;

  const wishlisted = user?.wishlist?.some(item => item.id === id);

  const wishlistHandler = () => {
    if (!user?.id) {
      return navigate("/signup");
    }
    return wishlisted ? removeFromWishlist(id) : addToWishlist(id);
  };

  const addToCartHandler = () => {
    if (!user?.id) return navigate("/signup");
    addToCart(id, {
      onSuccess: () => setClicked(true)
    });
  };

  const getCartButton = () => {
    switch (page) {
      case "cart":
        return (
          <button className="btn" onClick={() => removeFromCart(id)}>
            Remove from Cart
          </button>
        );

      case "wishlist":
        return (
          <button className="btn" onClick={() => moveToCart(id)}>
            Move to Cart
          </button>
        );

      default:
        return clicked ? (
          <button
            className="btn btn--primary"
            onClick={() => navigate("/cart")}>
            Go to Cart
          </button>
        ) : (
          <button className="btn" onClick={addToCartHandler}>
            Add to Cart
          </button>
        );
    }
  };

  return (
    <div className={`card ${horizontal ? "card--horizontal" : ""}`}>
      <div className="card__fav" onClick={wishlistHandler}>
        <i className={`${wishlisted ? "fa-solid" : "fa-regular"} fa-heart`}></i>
      </div>
      <img className="card__image" src={pictureLink} alt={name} />
      <div className="card__content">
        <h2 className="card__title">{name}</h2>
        <h3 className="card__subtitle">
          ₹ {price - discount}{" "}
          <span className="card__subtitle--canceled">{price}</span>
        </h3>

        <p className="quantity__info">
          Quantity:{" "}
          <i
            className="px-1 fa-solid fa-circle-minus"
            onClick={() => decrementQuantity(id)}></i>
          {cartItem?.quantity}
          <i
            className="px-1 fa-solid fa-circle-plus"
            onClick={() => incrementQuantity(id)}></i>
        </p>
        {getCartButton()}
        <button
          onClick={() => moveToWishlist(id)}
          className="btn card__btn--outline">
          Move to wishlist
        </button>
      </div>
    </div>
  );
};

export { Card };
