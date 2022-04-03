import React from "react";
import { Card } from "../";
import { useFilters } from "../../context/FilterContext";
import { useProductsQuery } from "../../hooks";
import { getFilteredProducts } from "../../utils/getFilteredProducts";
import "./ProductList.css";

const ProductList = () => {
  const { data, error, isLoading, isError } = useProductsQuery();
  const { filters } = useFilters();

  if (isError) {
    return <div>some error occured. {error.message}</div>;
  }

  const filteredProducts = getFilteredProducts(data?.products, filters);

  return (
    <main className="products mb-8">
      {isLoading ? (
        <h3 className="h3 ta-center mt-3 mb-6">loading...</h3>
      ) : (
        <>
          <h3 className="h3 ta-center mt-3 mb-6">Showing Products</h3>
          <div className="container">
            {filteredProducts.map(product => (
              <Card page="products" key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </main>
  );
};

export { ProductList };
