import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <h1 className="logo">52 shop</h1>
        </Link>

        <div className="header__actions flex">
          <Link to="/wishlist" className="btn btn--icon m-0">
            <i className="fa-regular fa-heart"></i>
          </Link>
          <Link to="cart" className="btn btn--link m-0">
            <i className="fa-solid fa-cart-shopping"></i> Cart
          </Link>
          <Link to="signup" className="btn btn--primary m-0">
            SignUp
          </Link>
        </div>
      </div>
    </header>
  );
};

export { Header };
