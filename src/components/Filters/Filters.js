import React from "react";
import "./Filters.css";

const Filters = () => {
  return (
    <aside className="filters px-4 pt-4">
      <div className="filter__header">
        <h3 className="text-md m-0">Filter</h3>
        <button className="btn btn--link m-0">Clear All</button>
      </div>

      <section className="my-3">
        <p className="text-md mb-1">Price</p>
        <label className="price-range" htmlFor="price-range">
          <span>100</span>
          <span>1000</span>
        </label>
        <input className="width-100" type="range" id="price-range" />
      </section>

      <section className="my-3">
        <h4 className="text-md mb-1">Sort By</h4>
        <ul>
          <li className="my-1">
            <input
              className="mr-1"
              type="radio"
              name="price-sort"
              id="price-low-to-high"
            />
            <label htmlFor="price-low-to-high"> Price - low to high</label>
          </li>
          <li className="my-1">
            <input
              className="mr-1"
              type="radio"
              name="price-sort"
              id="price-high-to-low"
            />
            <label htmlFor="price-high-to-low"> Price - high to low</label>
          </li>
        </ul>
      </section>

      <section className="my-3">
        <h4 className="text-md mb-1">Category</h4>
        <ul>
          <li className="my-1">
            <input className="mr-1" type="checkbox" id="category-cards" />
            <label htmlFor="category-cards">Cards</label>
          </li>
          <li className="my-1">
            <input
              className="mr-1"
              type="checkbox"
              id="category-uncut-sheets"
            />
            <label htmlFor="category-uncut-sheets"> Uncut sheets</label>
          </li>
          <li className="my-1">
            <input className="mr-1" type="checkbox" id="category-accessories" />
            <label htmlFor="category-accessories"> Accessories</label>
          </li>
        </ul>
      </section>

      <section className="my-3">
        <h4 className="text-md mb-1">Rating</h4>
        <ul>
          <li className="my-1">
            <input className="mr-1" type="radio" name="rating" id="rating-4" />
            <label htmlFor="rating-4"> 4 stars & above</label>
          </li>
          <li className="my-1">
            <input className="mr-1" type="radio" name="rating" id="rating-3" />
            <label htmlFor="rating-3"> 3 stars & above</label>
          </li>
          <li className="my-1">
            <input className="mr-1" type="radio" name="rating" id="rating-2" />
            <label htmlFor="rating-2"> 2 stars & above</label>
          </li>
          <li className="my-1">
            <input className="mr-1" type="radio" name="rating" id="rating-1" />
            <label htmlFor="rating-1"> 1 stars & above</label>
          </li>
        </ul>
      </section>
    </aside>
  );
};

export { Filters };
