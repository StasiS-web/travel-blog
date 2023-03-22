import "./navigation.css";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";


const Navigation = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav className="nav">
      <div className="container-fluid">
        <div className="row">
          <div className="top-menu">
            <div className="container">
              <div className="row">
                <div className="col-sm-7 text-left menu-1">
                  <ul>
                    <li>
                      <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About</NavLink>
                    </li>
                    <li>
                      <NavLink to="/destination" className={({isActive}) => isActive ? "active" : ""}>Destination</NavLink>
                    </li>
                    <li >
                      <NavLink to="/contacts" className={({isActive}) => isActive ? "active" : "" }>Contact</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-5 user-links text-justify">
                  {user.email ?  
                    <>
                    <span>Hello, {user.name}</span>
                      <Link to="/profile/:profileName">Profile</Link>
                      <NavLink to="/logout" className="btn btn-primary">Logout</NavLink>
                    </>
                    :
                    <>
                      <Link to="/login">Login</Link> 
                      <Link to="/register">Register</Link>
                    </>
                  }
                </div>
                <div className="col-sm-5 text-right icons">
                  <Link to="#">
                    <li className="social-icons">
                      <i className="ri-whatsapp-fill"></i>
                    </li>
                  </Link>

                  <Link to="#">
                    <li className="social-icons">
                      <i className="ri-twitter-fill"></i>
                    </li>
                  </Link>

                  <Link to="#">
                    <li className="social-icons">
                      <i className="ri-facebook-circle-fill"></i>
                    </li>
                  </Link>
                  <Link to="">
                    <li className="social-icons">
                      <i className="ri-instagram-fill"></i>
                    </li>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 text-center menu-2">
            <div className="logo">
              <Link to="/">
                <h1 className="logo-slogan">
                  Awesome <span>.</span>
                  <small>Traveler</small>
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;