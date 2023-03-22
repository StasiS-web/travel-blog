import { useParams, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import formatDate from "../../utils/dateUtils";
import { paths } from "../../constants/Constants";
import { AuthContext } from "../../contexts/AuthContext";
import * as destinationService from "../../services/destinationService";

export const ArticleDetails = () => {
  const { articleId } = useParams();
  const [currentArticle, setCurrentArticle] = useState({});
  const { user } = useContext(AuthContext);

  useEffect(() => {
    destinationService.getDestinationById(articleId).then((result) => {
      setCurrentArticle(result);
    });
  });

  return (
    <div id="article-details">
      <div className="content no-pd-top">
        <div className="container">
          <div className="row animate-box">
            <div className="col-12 col-offset0 text-center heading">
              <h2>
                <span>Article Details</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-9 colpadded-right">
              <div className="row">
                <div className="col-12">
                  <div className="blog animate-box">
                    <div className="title text-center">
                      <h3>{currentArticle.title}</h3>
                      <span className="posted-on">
                        {formatDate(currentArticle.createdOn)}
                      </span>
                      <span className="category">
                        {currentArticle.category}
                      </span>
                    </div>
                    <img
                      className="img-responsive"
                      src={currentArticle.imageUrl}
                      alt=""
                    />
                    <div className="blog-text">
                      <p>{currentArticle.content}</p>
                    </div>
                    {user.email ? (
                      <div className="admin-btn">
                        <Link to={paths.detailsPath / `${articleId}`}>
                          {" "}
                          <i className="ri-edit-box-fill"></i>
                        </Link>
                        <Link to={paths.detailsPath / `${articleId}`}>
                          <i className="ri-delete-bin-2-fill"></i>
                        </Link>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
