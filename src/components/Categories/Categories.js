import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

const categories = [
  {
    id: 1,
    name: "Cards",
    pictureLink:
      "https://shop-images.vercel.app/categories/category-cards-square.webp"
  },
  {
    id: 2,
    name: "Uncut Sheets",
    pictureLink:
      "https://shop-images.vercel.app/categories/uncut-sheet-180.webp"
  },
  {
    id: 3,
    name: "Cardistry Trainers",
    pictureLink:
      "https://shop-images.vercel.app/categories/cardistry-trainers.webp"
  },
  {
    id: 4,
    name: "Magic Tricks",
    pictureLink:
      "https://shop-images.vercel.app/categories/magic-trick-category-square.webp"
  },
  {
    id: 5,
    name: "Accessories",
    pictureLink:
      "https://shop-images.vercel.app/categories/accessories-category-square.webp"
  }
];

const Categories = () => {
  return (
    <section className="my-8 section--categories">
      <div className="container">
        {categories.map(({ id, name, pictureLink }) => (
          <Link key={id} to={`/products?categoryId=${id}`}>
            <div className="category">
              <img className="category__image" src={pictureLink} alt={name} />
              <p className="category__text">{name}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export { Categories };
