import React from "react";
import "./NewArrivals.css";

const NewArrivals = () => {
  return (
    <section className="section--new-arrivals my-8">
      <div className="container">
        <div className="card card--horizontal p-4">
          <img
            className="card__image"
            src="/assets/summer-nocs-blue.jpg"
            alt="first playing cards"
          />
          <div className="card__content">
            <p>NEW ARRIVAL</p>
            <h3 className="h3 mt-auto">Summer NOCs blue</h3>
            <p className="text-base m-0">
              Printed to perfection. Bicycle Premium Stock with THIN CRUSH
              Finish.
            </p>
          </div>
        </div>

        <div className="card card--horizontal p-4">
          <img
            className="card__image"
            src="/assets/summer-nocs-orange.jpg"
            alt="first playing cards"
          />
          <div className="card__content">
            <p>NEW ARRIVAL</p>
            <h3 className="h3 mt-auto">Summer NOCs orange</h3>
            <p className="text-base m-0">
              The NOC's have proven to be a top choice for card collectors, and
              card enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { NewArrivals };
