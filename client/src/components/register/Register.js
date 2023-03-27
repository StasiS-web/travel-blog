import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateUser } from "../../utils/validationHandler";
import { notifications } from "../../constants/Constants";
import { useNotificationsContext, types } from "../../contexts/NotificationContext";
import { useAuthContext } from "../../contexts/AuthContext";
import * as authServiceFactory from "../../services/authService";

const Register = () => {
  const { userLogin } = useAuthContext();
  const { showNotifications } = useNotificationsContext();
  const navigate = useNavigate();
  useEffect(() => {
    document.getElementById("register-page").classList.add("active");
  }, []);

  const onRegisterSubmit = (event) =>{
    event.preventDefault();
    
    let formData = new FormData(event.currentTarget);
    let { email, password, confirmPassword} = Object.fromEntries(formData);
     
    if (
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
       showNotifications({
        message: notifications.fieldsErrorMsg,
        type: types.error,
      });
      return;
    }

    if (email.length < 6) {
      showNotifications({
        message: notifications.emailWarningMsg,
        type: types.warning,
      });
      return;
    }

    if (password !== confirmPassword) {
      showNotifications({
        message: notifications.passwordWarningMsg,
        type: types.warning,
      });
      return;
    }
  
    authServiceFactory.register(email, password)
      .then((authData) => {
        userLogin(authData);
        navigate("/");
      });
  }

  const validationHandler = (event) => {
    let [message, type] = validateUser(event.target);
    showNotifications({type, message});
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
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email ..."
                    className="form-control"
                    onBlur={validationHandler}
                  />
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
                </div>
              </div>
              <div className="form-group row">
                <div className="col-12 field">
                  <button
                    type="submit"
                    className="btn btn-primary">
                    Sign Up
                  </button>
                  <p className="text-center">
                    Already have an account?{" "}
                    <Link to="/login">Login</Link>
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
