import React from "react";
import "./Wishlist.css";

const Wishlist = () => {
  return (
    <main className="wishlist mb-8">
      <h3 className="h3 ta-center mt-3 mb-6">Wishlist</h3>
      <div className="container">
        <div className="card">
          <div className="card__fav">
            <i className="fa-solid fa-heart"></i>
          </div>
          <img
            className="card__image"
            src="https://52shop.vercel.app/assests/summer-nocs-orange.jpg"
            alt="summer nocs orange"
          />
          <div className="card__content">
            <h2 className="card__title">Summer NOCs orange</h2>
            <h3 className="card__subtitle">₹ 999</h3>
            <button className="btn">Move to Cart</button>
          </div>
        </div>
        <div className="card">
          <div className="card__fav">
            <i className="fa-solid fa-heart"></i>
          </div>
          <img
            className="card__image"
            src="https://52shop.vercel.app/assests/virtuoso-playing-cards.jpg"
            alt="Virtuoso Playing Cards"
          />
          <div className="card__content">
            <h2 className="card__title">Virtuoso Playing Cards</h2>
            <h3 className="card__subtitle">₹ 1999</h3>
            <button className="btn">Move to Cart</button>
          </div>
        </div>
        <div className="card">
          <div className="card__fav">
            <i className="fa-solid fa-heart"></i>
          </div>
          <img
            className="card__image"
            src="https://52shop.vercel.app/assests/fontaine-neon-orange.jpg"
            alt="fontaine neon orange"
          />
          <div className="card__content">
            <h2 className="card__title">Fontaine Neon</h2>
            <h3 className="card__subtitle">₹ 1499</h3>
            <button className="btn">Move to Cart</button>
          </div>
        </div>
        <div className="card">
          <div className="card__fav">
            <i className="fa-solid fa-heart"></i>
          </div>
          <img
            className="card__image"
            src="https://52shop.vercel.app/assests/uncut-sheet-540-5-4.jpg"
            alt="uncut sheets 1st Playing Cards v4 red"
          />
          <div className="card__content">
            <h2 className="card__title">Uncut sheets</h2>
            <h3 className="card__subtitle">₹ 1499</h3>
            <button className="btn">Move to Cart</button>
          </div>
        </div>
        <div className="card">
          <div className="card__fav">
            <i className="fa-solid fa-heart"></i>
          </div>
          <img
            className="card__image"
            src="https://52shop.vercel.app/assests/red-wheels-playing-cards.jpg"
            alt="red wheel playing cards"
          />
          <div className="card__content">
            <h2 className="card__title">Red Wheel Playing cards</h2>
            <h3 className="card__subtitle">₹ 1999</h3>
            <button className="btn">Move to Cart</button>
          </div>
        </div>
        <div className="card">
          <div className="card__fav">
            <i className="fa-solid fa-heart"></i>
          </div>
          <img
            className="card__image"
            src="https://52shop.vercel.app/assests/first-playing-cards.jpg"
            alt="1st Playing Cards v3"
          />
          <div className="card__content">
            <h2 className="card__title">1st Playing Cards v3</h2>
            <h3 className="card__subtitle">₹ 999</h3>
            <button className="btn">Move to Cart</button>
          </div>
        </div>
        <div className="card">
          <div className="card__fav">
            <i className="fa-solid fa-heart"></i>
          </div>
          <img
            className="card__image"
            src="https://52shop.vercel.app/assests/summer-nocs-blue.jpg"
            alt="summer nocs blue"
          />
          <div className="card__content">
            <h2 className="card__title">Summer NOCs blue</h2>
            <h3 className="card__subtitle">₹ 999</h3>
            <button className="btn">Move to Cart</button>
          </div>
        </div>
        <div className="card">
          <div className="card__fav">
            <i className="fa-solid fa-heart"></i>
          </div>
          <img
            className="card__image"
            src="https://52shop.vercel.app/assests/category-cards.jpg"
            alt="1st playing cards v4 red"
          />
          <div className="card__content">
            <h2 className="card__title">1st Playing Cards v4 red</h2>
            <h3 className="card__subtitle">₹ 899</h3>
            <button className="btn">Move to Cart</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export { Wishlist };
