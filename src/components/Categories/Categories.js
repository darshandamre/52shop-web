import React from "react";
import { Link } from "react-router-dom";
import { categoryList } from "../../utils/categoryList";
import "./Categories.css";

const Categories = () => {
  return (
    <section className="my-8 section--categories">
      <div className="container">
        {categoryList.map(({ id, name, pictureLink }) => (
          <Link key={id} to={`/products`} state={{ categoryIds: [id] }}>
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
