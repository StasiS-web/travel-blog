import { Link } from "react-router-dom";
import {paths} from "../../constants/Constants";

 const NotFound = () => {
  return (
    <div id="not-found">
      <div className="row">
        <div className="container">
          <img src="https://res.cloudinary.com/dnvg6uuxl/image/upload/v1678298265/travel-blog/error_404_wnxcl7_gzg5il.jpg" className="img-responsive" />
          <h2 className="heading text-center">404</h2>
          <p className="text-danger text-center">
            The page you are looking for is temporarily unavailable. Please go to Home page.
          </p>
          <Link to={paths.homePath} className="btn btn-primary">Go Home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
