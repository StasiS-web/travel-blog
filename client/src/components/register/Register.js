import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateUser } from "../../utils/validationHandler";
import { notifications } from "../../constants/Constants";
import { useNotificationsContext, types } from "../../contexts/NotificationContext";
import { useAuthContext } from "../../contexts/AuthContext";
import * as authServiceFactory from "../../services/authService";

const Register = () => {
  const { userLogin } = useAuthContext();
  const { showNotifications } = useNotificationsContext();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');
  const [ error, setError ] = useState(false);
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
      confirmPassword === "") { 
       showNotifications({
        message: notifications.fieldsErrorMsg,
        type: types.error,
      });
      return;
    }

    if( email.length === 0 || password.length === 0 || confirmPassword.length === 0) {
      setError(true);
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
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  }

  const validationHandler = (event) => {
    let [message, type] = validateUser(event.target);
    setError(true);
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
                    onChange={event => setEmail(event.target.value)}
                    onBlur={validationHandler}/>
                  {error && email.length <= 0 ? <p className="text-danger text-center">{notifications.emailFieldErrorMsg}</p> : ""}
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
                    onChange={event => setPassword(event.target.value)}
                    onBlur={validationHandler}/>
                    {error && password.length <= 0 ? <p className="text-danger text-center">{notifications.passwordFieldErrorMsg}</p> : ""}
                  </div>
                <div className="col-12 field">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password ..."
                    className="form-control"
                    onChange={event => setConfirmPassword(event.target.value)}
                    onBlur={validationHandler}/>
                    {error && confirmPassword.length <= 0 ? <p className="text-danger text-center">{notifications.confirmPasswordFieldErrorMsg}</p> : ""}
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
