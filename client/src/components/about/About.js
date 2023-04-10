import { Link } from "react-router-dom";
import useScrollTop  from "../../hooks/useScrollTop";
import "./about.css";

const About = () => {
  useScrollTop();
  return (
    <div id="about">
      <div id="content" className="no-pd-top">
        <div className="container">
          <div className="row animate-box">
            <div className="col-6 col-offset3 text-center heading">
              <h2>
                <span>About Us</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-offset3">
              <div className="staff">
                <img src="https://res.cloudinary.com/dnvg6uuxl/image/upload/v1677792081/travel-blog/user-staff_e3vz8z.jpg" alt="about me" />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
