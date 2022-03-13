import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  return (
    <main className="auth">
      <div className="container">
        <div className="auth__content mx-auto p-6">
          <h2 className="h2 ta-center mt-0">Login</h2>
          <label className="text-base" for="email">
            Email
          </label>
          <input
            className="input width-100 mb-3"
            id="email"
            type="email"
            placeholder="name@example.com"
          />
          <label className="text-base" for="Password">
            Password
          </label>
          <input
            className="input width-100 mb-3"
            id="Password"
            type="Password"
            placeholder="***********"
          />
          <div className="input-checkbox">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me" className="ml-1">
              Remember me
            </label>
            <a href="/xyz" className="ml-auto">
              Forgot your Password?
            </a>
          </div>
          <div className="my-3">
            <button className="btn btn--primary width-100 mx-0">Login</button>
          </div>
          <p className="ta-center">
            <Link to="/signup" className="btn btn--link">
              Create New Account
              <i className="fa-solid fa-greater-than ml-1"></i>
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export { Login };
