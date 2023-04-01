import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import "./aboutme.css";

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
         Founder of Awesome Traveler and an accomplished public speaker. I'm on a mission to help you to plan your next vacation.
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
         <NavLink to="/profile" className="btn btn-primary">Profile</NavLink>
         <NavLink to="/destinations/create-article" className="btn btn-success"><i className="ri-add-circle-fill"></i>Create</NavLink> 
        </div> ) : null}
      </div>
    </div>
  );
}

export default AboutMe;
