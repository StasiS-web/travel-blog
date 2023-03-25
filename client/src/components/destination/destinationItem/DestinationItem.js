import { Link } from "react-router-dom";
import { useState } from "react";

const DestinationItem = ({article}) => {
  const [ showMore, setShowMore ] = useState(false);

    return(
        <div className="col-6">
        <div className="blog animate-box">
          <div className="title text-center">
            <span className="posted-on">{article.createdOn}</span>
            <h3>
            <Link to={`/details/${article._id}`}>{article.title}</Link>
            </h3>
            <span className="category">{article.category}</span>
          </div>
          <Link to={`/details/${article._id}`}>
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
          </div>
          <Link to={`/details/${article._id}`} onClick={() => setShowMore(!showMore)}>Details</Link>
        </div>
      </div>
    )
}

export default DestinationItem;