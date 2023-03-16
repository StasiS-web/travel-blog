import "./navigation.css";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { paths } from '../../constants/constants';


const Navigation = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav className="nav">
      <div className="container-fluid">
        <div className="row">
          <div className="top-menu">
            <div className="container">
              <div className="row">
                <div className="colsm-7 text-left menu-1">
                  <ul>
                    <li>
                      <NavLink to={paths.homePath} className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
                    </li>
                    <li>
                      <NavLink to={paths.aboutPath} className={({isActive}) => isActive ? "active" : ""}>About</NavLink>
                    </li>
                    <li>
                      <NavLink to={paths.destinationsPath} className={({isActive}) => isActive ? "active" : ""}>Destination</NavLink>
                    </li>
                    <li >
                      <NavLink to={paths.contactPath} className={({isActive}) => isActive ? "active" : "" }>Contact</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="colsm-5 user-links text-justify">
                  {user.email ?  
                    <>
                      <Link to={paths.profilePath}>Profile</Link>
                      <NavLink to={paths.logoutPath} className="btn btn-primary">Logout</NavLink>
                    </>
                    :
                    <>
                      <Link to={paths.loginPath}>Login</Link> 
                      <Link to={paths.registerPath}>Register</Link>
                    </>
                  }
                </div>
                <div className="colsm-5 text-right icons">
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
          <div className="colxs-12 text-center menu-2">
            <div className="logo">
              <Link to={paths.homePath}>
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