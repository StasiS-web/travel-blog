import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as authService from "../../services/authService";
import { notifications, paths } from "../../constants/Constants";
import { AuthContext } from "../../contexts/AuthContext";
import { types } from "../../contexts/NotificationContext";
import { validateUser } from "../../utils/validationHandler";

const Login = () => {
  const [error, setError] = useState({ message: "", type: "" });
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.getElementById("login-page").classList.add("active");
  }, []);

  const onLoginSubmit = async (event, data) => {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let { email, password } = Object.fromEntries(formData);

    if (email === "" || password === "") {
      setError({
        message: notifications.fieldsErrorMsg,
        type: types.error,
      });
      return;
    }

    await authService
      .login(email, password)
      .then((authData) => {
        if (!authData._id) {
          return;
        }
        userLogin(authData);
        navigate("/");
      })
      .catch(() => {
        navigate("/404");
      });
  };

  const validationHandler = (event) => {
    let [message, type] = validateUser(event.target);
    setError({ type, message });
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
            <form id="login-form" onSubmit={onLoginSubmit}>
              <div className="form-group">
                <div className="col-12 field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email ..."
                    className="form-control"
                    onBlur={validationHandler}
                  />
                  {error.name === "email" ? (
                    <span className="text-warning">{error.message}</span>
                  ) : (
                    ""
                  )}
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
                    onBlur={validationHandler}
                  />
                  {error.name === "password" ? (
                    <span className="text-warning">{error.message}</span>
                  ) : (
                    ""
                  )}
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
};

export default Login;
