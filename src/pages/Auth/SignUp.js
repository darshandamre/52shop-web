import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputField } from "../../components";
import { useUser } from "../../context/UserContext";
import { API } from "../../utils/constants";
import { setToken } from "../../utils/token";
import "./Auth.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useUser();
  const navigate = useNavigate();

  const submitHandler = async e => {
    e.preventDefault();
    if (!name || !email || !password) return;
    try {
      const response = await fetch(`${API}/signup`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
      });

      const { data } = await response.json();

      if (data) {
        const { token, user, wishlist, cart } = data;
        setToken(token);
        dispatch({ type: "SET_USER_INFO", payload: { user, wishlist, cart } });
        return navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="auth">
      <div className="container">
        <form onSubmit={submitHandler} className="auth__content mx-auto p-6">
          <h2 className="h2 ta-center mt-0">SignUp</h2>
          <InputField
            value={name}
            onChange={e => setName(e.target.value)}
            label="Name"
            type="text"
            placeholder="bob"
          />
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
            <button className="btn btn--primary width-100 mx-0">
              Create New Account
            </button>
          </div>
          <p className="ta-center">
            <Link to="/login" className="btn btn--link">
              Already have an account
              <i className="fa-solid fa-greater-than ml-1"></i>
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export { SignUp };
