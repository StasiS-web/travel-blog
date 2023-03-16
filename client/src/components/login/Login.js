import "./login.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";
import { paths } from '../../constants/constants';

 const Login = () => {
  const { userLogin } = useContext(AuthContext)
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();

    const { email, password } = Object.fromEntries(new FormData(event.target));
    
    authService.login(email, password)
        .then(authData => {
          userLogin(authData);
          navigate(paths.homePath);
        })
        .catch(() => {
          navigate(paths.error404Path);
        })
  
  };

  return (
    <div id="login-page">
      <div className="container">
        <div className="row">
          <div className="col-12 col-offset0 text-center heading">
            <h2>
              <span>Sign In</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-offset3 login">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <div className="col-12 field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email ..."
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="col-12 field">
                  <label htmlFor="email">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password ..."
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-12 field">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  <p className="text-center">
                    If you don't have an account.{" "}
                    <Link to={paths.registerPath}>Register</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
