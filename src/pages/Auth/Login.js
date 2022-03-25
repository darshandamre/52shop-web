import React from "react";
import { useQueryClient } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { InputField } from "../../components";
import { useForm } from "../../hooks/useForm";
import { useLoginMutation } from "../../hooks/useLoginMutation";
import { toErrorMap } from "../../utils/toErrorMap";
import { setToken } from "../../utils/token";
import { loginValidator } from "../../utils/validator";
import "./Auth.css";

const initialLoginData = {
  email: "",
  password: ""
};

const Login = () => {
  const { values, errors, fields, isSubmitting, setSubmitting, setErrors } =
    useForm(initialLoginData, loginValidator);
  const { mutateAsync } = useLoginMutation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const loginHandler = async e => {
    e.preventDefault();
    setSubmitting(true);
    if (!errors) {
      try {
        const { token } = await mutateAsync(values);
        console.log(token);
        setToken(token);
        queryClient.invalidateQueries("user", {
          refetchActive: true,
          refetchInactive: true
        });
        navigate(-2);
      } catch (err) {
        setErrors(toErrorMap(err.response.data.errors));
      }
    }
    setSubmitting(false);
  };

  return (
    <main className="auth">
      <div className="container">
        <form onSubmit={loginHandler} className="auth__content mx-auto p-6">
          <h2 className="h2 ta-center mt-0">Login</h2>
          <InputField
            {...fields.email}
            label="Email"
            placeholder="example@xyz.com"
          />
          <InputField
            {...fields.password}
            label="Password"
            type="password"
            placeholder="**********"
          />
          <div className="my-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn--primary width-100 mx-0">
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
