import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import authServices from "../../services/authService";
import { AuthContext } from "../../contexts/AuthContext"; 
import { paths, notifications } from "../../constants/Constants";
import { types, NotificationContext} from "../../contexts/NotificationContext";

const Register = () => {
  const navigate = useNavigate();
  const { userLogin } = useContext(AuthContext);
  const { showNotification } = useContext(NotificationContext);

  const onRegister = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");

    if(email === '' || password === ''){
      return showNotification(notifications.fieldsWarningMsg, types.warning);
    }

    if (password !== confirmPassword) {
      return showNotification(notifications.passwordWarningMsg, types.warning);
    }

    await authServices.register(name, email, password)
    .then(authData => {
        userLogin(authData);
        showNotification(notifications.registerSuccessMsg, types.success);
        event.target.reset();
        navigate("/");
    })
    .catch((error) => {
      return showNotification(error.message, types.error);
    });
  };

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
            <form id="register" onSubmit={onRegister} method="POST">
              <div className="form-group">
              <div className="col-12 field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="name"
                    id="name"
                    name="name"
                    placeholder="Full Name ..."
                    className="form-control"
                  />
                </div>


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
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password ..."
                    className="form-control"
                  />
                </div>
                <div className="col-12 field">
                  <label htmlFor="con-password">Confirm Password</label>
                  <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    placeholder="Confirm Password ..."
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-12 field">
                  <button type="submit" className="btn btn-primary" defaultValue="Register">
                    Sign Up
                  </button>
                  <p className="text-center">
                    Already have an account? <Link to={paths.loginPath}>Login</Link>
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
