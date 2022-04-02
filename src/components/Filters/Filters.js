import React, { useRef } from "react";
import { useFilters } from "../../context/FilterContext";
import { categoryList } from "../../utils/categoryList";
import "./Filters.css";

const Filters = () => {
  const {
    filters: { priceRange, sort, categoryIds, rating: selectedRating },
    dispatchFilters
  } = useFilters();
  const rangeRef = useRef();

  return (
    <aside className="filters px-4 pt-4">
      <div className="filter__header">
        <h3 className="text-md m-0">Filter</h3>
        <button
          onClick={() => {
            rangeRef.current.value = 10000;
            dispatchFilters({ type: "CLEAR_ALL" });
          }}
          className="btn btn--link m-0">
          Clear All
        </button>
      </div>

      <section className="my-3">
        <p className="text-md mb-1">Price</p>
        <label className="price-range" htmlFor="price-range">
          <span>500</span>
          <span>10000</span>
        </label>
        <input
          className="width-100"
          type="range"
          name="price-range"
          defaultValue={priceRange}
          onMouseUp={e =>
            dispatchFilters({
              type: "PRICE_RANGE",
              payload: Number(e.target.value)
            })
          }
          min={500}
          max={10000}
          ref={rangeRef}
          id="price-range"
        />
      </section>

      <section className="my-3">
        <h4 className="text-md mb-1">Sort By</h4>
        <ul>
          <li className="my-1 cursor-pointer">
            <input
              className="mr-1"
              type="radio"
              name="price-sort"
              id="price-low-to-high"
              checked={sort === "LOW_TO_HIGH"}
              onChange={() =>
                dispatchFilters({
                  type: "SORT",
                  payload: "LOW_TO_HIGH"
                })
              }
            />
            <label htmlFor="price-low-to-high" className="cursor-pointer">
              Price - low to high
            </label>
          </li>
          <li className="my-1">
            <input
              className="mr-1 cursor-pointer"
              type="radio"
              name="price-sort"
              id="price-high-to-low"
              checked={sort === "HIGH_TO_LOW"}
              onChange={() =>
                dispatchFilters({
                  type: "SORT",
                  payload: "HIGH_TO_LOW"
                })
              }
            />
            <label htmlFor="price-high-to-low" className="cursor-pointer">
              Price - high to low
            </label>
          </li>
        </ul>
      </section>

      <section className="my-3">
        <h4 className="text-md mb-1">Category</h4>
        <ul>
          {categoryList.map(({ id, name }) => (
            <li key={id} className="my-1">
              <input
                type="checkbox"
                id={`category-${id}`}
                name="category"
                value={id}
                checked={categoryIds.includes(id)}
                onChange={() =>
                  dispatchFilters({ type: "CATEGORY", payload: id })
                }
                className="mr-1 cursor-pointer"
              />
              <label htmlFor={`category-${id}`} className="cursor-pointer">
                {name}
              </label>
            </li>
          ))}
        </ul>
      </section>

      <section className="my-3">
        <h4 className="text-md mb-1">Rating</h4>
        <ul>
          {[4, 3, 2, 1].map(rating => (
            <li key={rating} className="my-1">
              <input
                type="radio"
                id={`rating-${rating}`}
                name="rating"
                value={rating}
                className="mr-1 cursor-pointer"
                checked={rating === selectedRating}
                onChange={() =>
                  dispatchFilters({ type: "RATING", payload: rating })
                }
              />
              <label htmlFor={`rating-${rating}`} className="cursor-pointer">
                {rating} stars & above
              </label>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
};

export { Filters };
