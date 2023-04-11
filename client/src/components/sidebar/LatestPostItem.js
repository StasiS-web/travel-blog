import { Link } from "react-router-dom";


const LatestPostItem = ({_id, imageUrl, title}) => {
    return (
        <div className="blog-entry">
        <Link to={`/destinations/${_id}`}>
          <img  src={imageUrl} className="img-responsive" alt="" />
          <div className="desc">
            <h3>{title}</h3>
          </div>
        </Link>
      </div>
    )
}

export default LatestPostItem;