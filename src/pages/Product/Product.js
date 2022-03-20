import React from "react";
import { Filters } from "../../components";
import "./Product.css";

const Product = () => {
  return (
    <div className="product-page">
      <Filters />

      <main className="products mb-8">
        <h3 className="h3 ta-center mt-3 mb-6">Showing All Products</h3>
        <div className="container">
          <div className="card">
            <div className="card__fav">
              <i className="fa-regular fa-heart"></i>
            </div>
            <img
              className="card__image"
              src="https://shop-images.vercel.app/products/cards/summer-nocs-orange.webp"
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
              src="https://shop-images.vercel.app/products/cards/virtuoso-playing-cards.webp"
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
              <i className="fa-regular fa-heart"></i>
            </div>
            <img
              className="card__image"
              src="https://shop-images.vercel.app/products/cards/fontaine-neon-orange.webp"
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
              src="https://shop-images.vercel.app/products/uncut-sheets/v4-uncut-sheets.webp"
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
              <i className="fa-regular fa-heart"></i>
            </div>
            <img
              className="card__image"
              src="https://shop-images.vercel.app/products/cards/red-wheels-playing-cards.webp"
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
              <i className="fa-regular fa-heart"></i>
            </div>
            <img
              className="card__image"
              src="https://shop-images.vercel.app/products/cards/first-playing-cards.webp"
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
              <i className="fa-regular fa-heart"></i>
            </div>
            <img
              className="card__image"
              src="https://shop-images.vercel.app/products/cards/summer-nocs-blue.webp"
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
              <i className="fa-regular fa-heart"></i>
            </div>
            <img
              className="card__image"
              src="https://shop-images.vercel.app/products/cards/category-cards.webp"
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
    </div>
  );
};

export { Product };
