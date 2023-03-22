import { Link } from "react-router-dom";
import { useState } from "react";

const DestinationItem = ({
  _id,
  title,
  category,
  createdOn,
  imageUrl,
  content,
},) => {
  const [ showMore, setShowMore ] = useState(false);

    return(
        <div className="col-6">
        <div className="blog animate-box">
          <div className="title text-center">
            <span className="posted-on">{createdOn}</span>
            <h3>
            <Link to={`/destination/${_id}`}>{title}</Link>
            </h3>
            <span className="category">{category}</span>
          </div>
          <Link to={`/destination/${_id}`}>
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
          </div>
          <Link to="/destination/:id" onClick={() => setShowMore(!showMore)}>Details</Link>
        </div>
      </div>
    )
}

export default DestinationItem;