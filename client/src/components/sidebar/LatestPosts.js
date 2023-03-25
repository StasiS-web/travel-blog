import "./latestPosts.css";
import { useParams, Link } from "react-router-dom";

const LatestPosts = () => {
  const { articleId } = useParams();
  return (
    <div className="side animate-box">
      <div className="col-12 col-md-offset-0 text-center heading heading-sidebar">
        <h2>
          <span>Latest Posts</span>
        </h2>
      </div>
      <div className="blog-entry">
        <Link to={`/details/${articleId}`}>
          <img src="https://res.cloudinary.com/dnvg6uuxl/image/upload/v1677863148/travel-blog/destination/aruba_askniz.jpg" className="img-responsive" alt="" />
          <div className="desc">
            <span className="date">Mar. 21, 2023</span>
            <h3>7 Awesome Reasons to Visit Aruba</h3>
          </div>
        </Link>
      </div>
      <div className="blog-entry">
        <Link to={`/details/${articleId}`}>
          <img src="https://res.cloudinary.com/dnvg6uuxl/image/upload/v1677797444/travel-blog/popular/hiking-canada_ubwtfl.jpg" className="img-responsive" alt="" />
          <div className="desc">
            <span className="date">Feb. 28, 2023</span>
            <h3>The Trans Canada Trail</h3>
          </div>
        </Link>
      </div>
      <div className="blog-entry">
        <Link to={`/details/${articleId}`}>
          <img src="https://res.cloudinary.com/dnvg6uuxl/image/upload/v1678115031/travel-blog/popular/oxford-uni_rnmvu0.jpg" className="img-responsive" alt="" />
          <div className="desc">
            <span className="date">Feb. 16, 2023</span>
            <h3>The Oxford University College</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LatestPosts;