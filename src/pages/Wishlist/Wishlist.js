import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components";
import { useUserQuery } from "../../hooks";
import "./Wishlist.css";

const Wishlist = () => {
  const { data } = useUserQuery();

  return (
    <main className="wishlist mb-8">
      <h3 className="h3 ta-center mt-3 mb-6">Wishlist</h3>

      {data?.user.wishlist.length === 0 ? (
        <div className="ta-center mx-2">
          No items in your wishlist{" "}
          <Link to="/products" className="link">
            go to products
          </Link>{" "}
          page and add products in your wishlist.
        </div>
      ) : null}

      <div className="container">
        {data?.user.wishlist.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export { Wishlist };
