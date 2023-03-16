import "./footer.css";
import { Link } from "react-router-dom"
import { paths } from '../../constants/constants';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-4 widget">
            <h4><strong>Awesome Traveler</strong></h4>
            <p>
              Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
              reprehenderit. Eos cumque dicta adipisci architecto culpa amet.
            </p>
            <div className="footer-social">
               
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
          <div className="col-4 col-push1">
            <h4><strong>Links</strong></h4>
            <ul className="footer-links">
              <li>
              <a href={paths.homePath}>Home</a>
              </li>
              <li>
              <a href={paths.aboutPath}>About</a>
              </li>
              <li>
              <a href={paths.destinationsPath}>Destination</a>
              </li>
              <li>
              <a href={paths.contactPath}>Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-4 col-push1">
            <h4><strong>Contact Information</strong></h4>
            <ul className="footer-links">
              <li>
                <i className="ri-map-pin-line"></i> 198 West 21th Street, <br />{" "}
                Suite 721 New York NY 10016
              </li>
              <li>
                <i className="ri-phone-line"></i>
                <a href="tel://1234567920">+ 1235 2355 98</a>
              </li>
              <li>
                <i className="ri-mail-line"></i>
                <a href="mailto:info@yoursite.com">info@yoursite.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row copyright">
          <div className="col-12 text-center">
            <div>
              <p>
              <small className="block">
                &copy; 2016 Free HTML5. All Rights Reserved.
              </small>
              </p>
              <p>
              <small className="block">
                Designed by
                <a href="http://freehtml5.co/" target="_blank">
                  FreeHTML5.co
                </a> 
                Demo Images:
                <a href="http://unsplash.co/" target="_blank">
                  Unsplash
                </a>
              </small>
              </p>
              <p>
              <small className="block">
                Project Images:
                <a href="https://www.pexels.com/" target="_blank">
                  Pexels
                </a> and <a href="https://unsplash.com/" target="_blank">
                  Unsplash
                </a>
              </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;