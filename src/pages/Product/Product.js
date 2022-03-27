import React from "react";
import { Card, Filters } from "../../components";
import { useProductsQuery, useUserQuery } from "../../hooks";
import "./Product.css";

const Product = () => {
  const { data, error, isLoading, isError } = useProductsQuery();
  const { data: userData } = useUserQuery();

  if (isError) {
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
              {data.products?.map(product => (
                <Card
                  page="products"
                  key={product.id}
                  product={product}
                  wishlisted={userData?.user?.wishlist?.some(
                    wishlistItem => wishlistItem.id === product.id
                  )}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export { Product };
