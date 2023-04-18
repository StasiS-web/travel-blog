import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { notifications } from "../../constants/Constants";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNotificationsContext, types } from "../../contexts/NotificationContext";
import { validateUser } from "../../utils/validationHandler";
import * as authService from "../../services/authService";

const Login = () => {
  const { showNotifications } = useNotificationsContext();
  const { userLogin } = useAuthContext();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.getElementById("login-page").classList.add("active");
  }, []);

  const onLoginSubmit = async (event) => {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let { email, password } = Object.fromEntries(formData);

    if (email === "" || password === "") {
      showNotifications({
        message: notifications.fieldsErrorMsg,
        type: types.error,
      });
      return;
    }

    if( email.length === 0 || password.length === 0) {
      setError(true);
    }

    await authService.login(email, password)
      .then((authData) => {
        userLogin(authData);
        navigate("/");
      })
      .catch((error) => {
        showNotifications({message: error.message, type: types.error});
        console.log(error);
      });
  };

  const validationHandler = (event) => {
    let [message, type] = validateUser(event.target);
    setError(true);
    showNotifications({ type, message });
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
              </div>

              <div className="form-group row">
                <div className="col-12 field">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  <p className="text-center">
                    If you don't have an account.{" "}
                    <Link to="/register">Register</Link>
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
