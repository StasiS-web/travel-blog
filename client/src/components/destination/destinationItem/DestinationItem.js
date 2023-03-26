import React, {useState} from "react";
import { Link } from "react-router-dom";

const DestinationItem = ({ _id, title, imageUrl, category, content }) => {
  const [ showMore, setShowMore ] = useState(false);
  
  return(
    <div className="col-6">
    <div className="blog animate-box">
      <div className="title text-center">
        <h3>
        <Link to={`/destinations/${_id}`}>{title}</Link>
        </h3>
        <span className="category">{category}</span>
      </div>
      <Link to={`/destinations/${_id}`}>
        <img
          className="img-responsive"
          src={imageUrl}
          alt=""
        />
      </Link>
      <div className="blog-text text-center">
        <p>
          {showMore ? content : `${content.substring(0, 50)}`}
        </p>
        <Link to={`/destinations/${_id}`} onClick={() => setShowMore(!showMore)} className="btn btn-primary">Details</Link>
      </div>
    </div>
  </div>
)
}

export default DestinationItem;