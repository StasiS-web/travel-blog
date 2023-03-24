import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateUser } from "../../utils/validationHandler";
import { paths, notifications } from "../../constants/Constants";
import {  NotificationContext, types } from "../../contexts/NotificationContext";
import * as authService from "../../services/authService";

const Register = ({auth}) => {
  const navigate = useNavigate();
  const { addNotifications } = useContext(NotificationContext);
  const [error, setError] = useState({message: '', type: ''});
  useEffect(() => {
    document.getElementById("register-page").classList.add("active");
  }, []);

  const onRegisterSubmit = (data, event) =>{
    event.preventDefault();
    
    let formData = new FormData(event.currentTarget);
    let { name, email, password, confirmPassword} = Object.fromEntries(formData);
     
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError({
        message: notifications.fieldsErrorMsg,
        type: types.error,
      });
      return;
    }

    if (email.length < 6) {
      setError({
        message: notifications.emailWarningMsg,
        type: types.warning,
      });
      return;
    }

    if (password !== confirmPassword) {
      setError({
        message: notifications.passwordWarningMsg,
        type: types.warning,
      });
      return;
    }
  
    authService.register(name, email, password, confirmPassword)
      .then(authData => {
        if(!authData.ok){
          return;
        }
        auth.userLogin(authData);
        navigate("/");
      })
       .catch((error) =>
        addNotifications({type: types.warning, message: notifications.emailExists}),
        setError

    )
  }

  const validationHandler = (event) => {
    let [message, type] = validateUser(event.target);
    setError({type, message});
  }
  
  return (
    <div id="register-page">
      <div className="container">
        <div className="row">
          <div className="col-12 col-offset0 text-center heading">
            <h2>
              <span>Register</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-offset3">
            <form id="register" method="POST" onSubmit={onRegisterSubmit}>
              <div className="form-group">
                <div className="col-12 field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="name"
                    id="name"
                    name="name"
                    placeholder="Full Name ..."
                    className="form-control"
                    onBlur={validationHandler}
                  />
                  {error.name === "name" ? <span className="text-warning">{error.message}</span> : "" }
                </div>

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
                  {error.name === "email" ? <span className="text-warning">{error.message}</span> : "" }
                </div>
              </div>

              <div className="form-group">
                <div className="col-12 field">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password ..."
                    className="form-control"
                    onBlur={validationHandler}
                  />
                  {error.name === "password" ? <span className="text-danger">{error.message}</span> : "" }
                </div>
                <div className="col-12 field">
                  <label htmlFor="con-password">Confirm Password</label>
                  <input
                    type="password"
                    id="confirm-password"
                    name="confirmPassword"
                    placeholder="Confirm Password ..."
                    className="form-control"
                    onBlur={validationHandler}
                  />
                  {error.name === "confirmPassword" ? <span className="text-danger">{error.message}</span> : "" }
                </div>
              </div>
              <div className="form-group row">
                <div className="col-12 field">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    defaultValue="Register"
                  >
                    Sign Up
                  </button>
                  <p className="text-center">
                    Already have an account?{" "}
                    <Link to={paths.loginPath}>Login</Link>
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

export default Register;
