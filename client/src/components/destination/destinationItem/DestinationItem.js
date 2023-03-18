import { Link } from "react-router-dom";
import { formatDate } from "../../../utils/dateUtils";
import { paths } from "../../constants/Constants";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const DestinationItem = ({article}) => {
  const { user } = useContext(AuthContext);

    return(
        <div className="col-6">
        <div className="blog animate-box">
          <div className="title text-center">
            <span className="posted-on">{formatDate(article.createOn)}</span>
            <h3>
            <Link to={`/destination/${article._id}`}>{article.title}</Link>
            </h3>
            <span className="category">{article.category}</span>
          </div>
          <Link to={`/destination/${article._id}`}>
            <img
              className="img-responsive"
              src={article.imageUrl}
              alt=""
            />
          </Link>
          <div className="blog-text text-center">
            <p>
              
            </p>
            {user.email ? <div className="admin-btn">
            <Link to={paths.updateArticleById}><i className="ri-delete-bin-2-fill"></i></Link>
            <Link to={paths.deleteArticleById}><i className="ri-delete-bin-2-fill"></i></Link>
            </div> : null}
          </div>
        </div>
      </div>
    )
}

export default DestinationItem;