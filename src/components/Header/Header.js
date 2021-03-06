import { useQueryClient } from "react-query";
import { Link, useLocation } from "react-router-dom";
import { useUserQuery } from "../../hooks";
import { removeToken } from "../../utils/token";
import "./Header.css";

const Header = () => {
  const { data } = useUserQuery();
  const { user } = data ?? {};
  const queryClient = useQueryClient();
  const location = useLocation();

  const logoutHandler = () => {
    removeToken();
    queryClient.setQueriesData("user", () => undefined);
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <h1 className="logo">52 shop</h1>
        </Link>

        <div className="header__actions flex">
          <Link to="/wishlist" className="btn btn--icon badge-container m-0">
            <i className="fa-regular fa-heart"></i>
            {user?.wishlist?.length > 0 ? (
              <span className="badge-on-icon">{user?.wishlist?.length}</span>
            ) : null}
          </Link>
          <Link to="cart" className="btn btn--icon badge-container m-1">
            <i className="fa-solid fa-cart-shopping"></i>
            {user?.cart?.length > 0 ? (
              <span className="badge-on-icon">
                {user?.cart?.reduce(
                  (totalItems, { cartItem }) => totalItems + cartItem.quantity,
                  0
                )}
              </span>
            ) : null}
          </Link>
          {user?.id ? (
            <span onClick={logoutHandler} className="btn btn--link m-0">
              Logout
            </span>
          ) : (
            <Link
              to="/login"
              state={{ from: location }}
              className="btn btn--primary m-0">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export { Header };
