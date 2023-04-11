import React, {useState} from "react";
import { Link } from "react-router-dom";

const DestinationItem = ({article}) => {
  const [ showMore, setShowMore ] = useState(false);
  
  return(
    <div className="col-6">
    <div className="blog animate-box">
      <div className="title text-center">
        <h3>
        <Link to={`/destinations/${article._id}`}>{article.title}</Link>
        </h3>
        <span className="category">{article.category}</span>
      </div>
      <Link to={`/destinations/${article._id}`}>
        <img
          className="img-responsive"
          src={article.imageUrl}
          alt=""
        />
      </Link>
      <div className="blog-text text-center">
        <p>
          {showMore ? article.content : `${article.content.substring(0, 50)}`}
        </p>
        <Link to={`/destinations/${article._id}`} onClick={() => setShowMore(!showMore)} className="btn btn-primary">Details</Link>
      </div>
    </div>
  </div>
)
}

export default DestinationItem;