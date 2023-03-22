import "./login.css";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as authService from "../../services/authService";
import { paths } from "../../constants/Constants";
import { AuthContext } from "../../contexts/AuthContext";

 const Login = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {document.getElementById("login-page").classList.add("active")}, []);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = Object.fromEntries(new FormData(event.target));
    
      await authService.login(email, password)
        .then(authData => {
          userLogin(authData)
          navigate("/");
        })
        .catch(() => {
          navigate("/404");
        });
  
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
                    value={email}
                    onChange={onChangeEmail}
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
                    value={password}
                    onChange={onChangePassword}
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
