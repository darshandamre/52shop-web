import React from "react";
import { Filters, ProductList } from "../../components";
import { FiltersProvider } from "../../context/FilterContext";
import "./Product.css";

const Product = () => {
  return (
    <div className="product-page">
      <FiltersProvider>
        <Filters />
        <ProductList />
      </FiltersProvider>
    </div>
  );
};

export { Product };
