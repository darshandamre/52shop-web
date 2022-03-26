import React from "react";
import { Card } from "../../components";
import { useUserQuery } from "../../hooks/useUserQuery";
import "./Wishlist.css";

const Wishlist = () => {
  const { data } = useUserQuery();

  return (
    <main className="wishlist mb-8">
      <h3 className="h3 ta-center mt-3 mb-6">Wishlist</h3>
      <div className="container">
        {data?.user.wishlist.map(product => (
          <Card key={product.id} product={product} wishlisted />
        ))}
      </div>
    </main>
  );
};

export { Wishlist };
