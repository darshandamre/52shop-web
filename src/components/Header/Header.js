import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext.js";
import { removeToken } from "../../utils/token.js";
import "./Header.css";

const Header = () => {
  const {
    state: { user },
    dispatch
  } = useUser();

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
          {user.id ? (
            <span
              onClick={() => {
                removeToken();
                dispatch({ type: "LOGOUT" });
              }}
              className="btn btn--link m-0">
              Logout
            </span>
          ) : (
            <Link to="/signup" className="btn btn--primary m-0">
              SignUp
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export { Header };
