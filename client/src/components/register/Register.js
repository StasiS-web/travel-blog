import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";
import { paths, notifications, notificationMessages } from '../../constants/constants';


const Register = () => {
  const [errors, setError] = useState({
    nameTxt: null,
    emailTxt: null,
    passwordTxt: null,
    confirmPasswordTxt: null
  });
  const [ email, setEmail ] = useState('');
  const { userLogin } = useContext(useAuth);
  const navigate = useNavigate();


  const onRegister = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const name = formData.get('name');
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");

    if (password !== confirmPassword) {
      setError((state) => ({
        ...state,
        confirmPasswordTxt: notifications.passwordShouldMatch,
      }));
      return;
    }

    authService.register(name, email, password).then((authData) => {
      if(authData === "400") {
        throw authData;
      } else {
        userLogin(authData);
        navigate(paths.homePath);
      }
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
            <form onSubmit={onRegister} method="POST">
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
                  <p className={errors.nameTxt ? "error" : "hidden"}>
                    {errors.nameTxt}
                  </p>
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
                  <p className={errors.emailTxt ? "error" : "hidden"}>
                    {errors.emailTxt}
                  </p>
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
                  <p className={errors.emailTxt ? "error" : "hidden"}>
                    {errors.emailTxt}
                  </p>
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
                  <p className={errors.emailTxt ? "error" : "hidden"}>
                    {errors.emailTxt}
                  </p>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-12 field">
                  <button type="submit" className="btn btn-primary">
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
