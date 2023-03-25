import "./aboutme.css";
import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

 const AboutMe = () => {
  const { user } = useAuthContext();

  return (
    <div className="side animate-box">
      <div className="col-12 col-md-offset-0 text-center heading heading-sidebar">
        <h2>
          <span>About Me</span>
        </h2>
      </div>
      <div className="staff">
        <img
          src="https://res.cloudinary.com/dnvg6uuxl/image/upload/v1677792081/travel-blog/user-staff_e3vz8z.jpg"
          alt="about me"
        />
        <h3>Jean Smith</h3>
        <strong className="role">CEO, Founder</strong>
        <p>
          Quos quia provident conse culpa facere ratione maxime commodi
          voluptates id repellat velit eaque aspernatur expedita.
        </p>
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
        {user.email ? (
        <div className="admin-btn">
         <NavLink to="/destination/create-article" className="btn btn-success"><i className="ri-add-circle-fill"></i>Create</NavLink> 
        </div> ) : null}
      </div>
    </div>
  );
}

export default AboutMe;
