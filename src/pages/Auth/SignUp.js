import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const SignUp = () => {
  return (
    <main className="auth">
      <div className="container">
        <div className="auth__content mx-auto p-6">
          <h2 className="h2 ta-center mt-0">SignUp</h2>
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
              I accept all Terms & Conditions
            </label>
          </div>
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
        </div>
      </div>
    </main>
  );
};

export { SignUp };
