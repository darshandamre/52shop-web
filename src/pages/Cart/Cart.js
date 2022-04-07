import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components";
import { useUserQuery } from "../../hooks";
import "./Cart.css";

const Cart = () => {
  const { data } = useUserQuery();
  const { user } = data ?? {};

  const totalItems = user?.cart?.reduce(
    (sum, { cartItem }) => sum + cartItem.quantity,
    0
  );
  const totalPrice = user?.cart?.reduce(
    (sum, { price, cartItem }) => sum + price * cartItem.quantity,
    0
  );
  const totalDiscount = user?.cart?.reduce(
    (sum, { discount, cartItem }) => sum + discount * cartItem.quantity,
    0
  );
  const deliveryCharges = totalPrice > 1000 ? 100 : 300;
  const finalAmount = totalPrice + deliveryCharges - totalDiscount;

  return (
    <main className="cart">
      <div className="container">
        <h3 className="h3 ta-center mb-6">Cart ({totalItems})</h3>

        <div className="cart__content">
          {totalItems > 0 ? (
            <div className="cart__details p-6">
              <p className="cart__details__title fw-600">PRICE DETAILS</p>
              <ul className="price__list">
                <li className="price__item">
                  Price ({totalItems} items) <span>&#8377; {totalPrice}</span>
                </li>
                <li className="price__item">
                  Discount <span>- &#8377; {totalDiscount} </span>
                </li>
                <li className="price__item">
                  Delivery Charges <span>&#8377; {deliveryCharges} </span>
                </li>
                <li className="price__item fw-600">
                  TOTAL AMOUNT <span>&#8377; {finalAmount}</span>
                </li>
              </ul>
              <p className="pb-3">
                You will save &#8377; {totalDiscount} on this order
              </p>
              <button className="btn btn--primary width-100 m-0">
                PLACE ORDER
              </button>
            </div>
          ) : (
            <div className="ta-center mx-2">
              No items in your cart{" "}
              <Link to="/products" className="link">
                go to products
              </Link>{" "}
              page and add products in your cart.
            </div>
          )}

          <div>
            {user?.cart?.map(product => {
              return (
                <div key={product.id} className="mb-6">
                  <Card product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export { Cart };
