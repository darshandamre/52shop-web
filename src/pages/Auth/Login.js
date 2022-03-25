import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputField } from "../../components";
import { useUser } from "../../context/UserContext";
import { API } from "../../utils/constants";
import { setToken } from "../../utils/token";
import "./Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useUser();
  const navigate = useNavigate();

  const submitHandler = async e => {
    e.preventDefault();
    const response = await fetch(`${API}/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const { data } = await response.json();

    if (data) {
      const { token, user, wishlist, cart } = data;
      setToken(token);
      dispatch({ type: "SET_USER_INFO", payload: { user, wishlist, cart } });
      return navigate("/");
    }
  };

  return (
    <main className="auth">
      <div className="container">
        <form onSubmit={submitHandler} className="auth__content mx-auto p-6">
          <h2 className="h2 ta-center mt-0">Login</h2>
          <InputField
            value={email}
            onChange={e => setEmail(e.target.value)}
            label="Email"
            type="email"
            placeholder="name@example.com"
          />
          <InputField
            value={password}
            onChange={e => setPassword(e.target.value)}
            label="Password"
            type="password"
            placeholder="**********"
          />
          <div className="my-3">
            <button type="submit" className="btn btn--primary width-100 mx-0">
              Login
            </button>
          </div>
          <p className="ta-center">
            <Link to="/signup" className="btn btn--link">
              Create New Account
              <i className="fa-solid fa-greater-than ml-1"></i>
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export { Login };
