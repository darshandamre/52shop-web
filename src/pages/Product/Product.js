import React from "react";
import { Filters } from "../../components";
import { useProductsQuery } from "../../hooks/useProductsQuery.js";
import "./Product.css";

const Product = () => {
  const { data, error, isLoading } = useProductsQuery();

  if (error) {
    return <div>some error occured. {error.message}</div>;
  }

  return (
    <div className="product-page">
      <Filters />

      <main className="products mb-8">
        {isLoading ? (
          <h3 className="h3 ta-center mt-3 mb-6">loading...</h3>
        ) : (
          <>
            <h3 className="h3 ta-center mt-3 mb-6">Showing Products</h3>
            <div className="container">
              {data.products?.map(({ id, name, price, pictureLink }) => (
                <div key={id} className="card">
                  <div className="card__fav">
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <img className="card__image" src={pictureLink} alt={name} />
                  <div className="card__content">
                    <h2 className="card__title">{name}</h2>
                    <h3 className="card__subtitle">₹ {price}</h3>
                    <button className="btn">Move to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export { Product };
