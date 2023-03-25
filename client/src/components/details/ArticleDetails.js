import "./articleDetails.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import formatDate from "../../utils/dateUtils";
import { useAuthContext } from "../../contexts/AuthContext";
import { destinationServiceFactory } from "../../services/destinationService";
import { useService } from "../../hooks/useService";

export const ArticleDetails = () => {
  const { articleId } = useParams();
  const [currentArticle, setCurrentArticle] = useState({});
  const { user } = useAuthContext();
  const destinationService = useService(destinationServiceFactory);
  const navigate = useNavigate();

  const isOwner = currentArticle._ownerId === user._id;

  useEffect(() => {
    destinationService.getOneArticle(articleId)
      .then((result) => {
        setCurrentArticle(result);
    })
  }, [articleId]);

  const onDelete = async () => { 
    await destinationService.delete(articleId);
    navigate("/destination")
  }


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
                    {isOwner && (
                      <div className="admin-btn">
                        <Link to={`/destination/edit-article/${articleId}`} className="btn btn-outline edit-btn">
                          <i className="ri-edit-box-fill"></i>
                        </Link>
                        <button className="btn btn-danger" onClick={onDelete}>
                          <i className="ri-delete-bin-2-fill"></i>
                        </button>
                      </div>
                    )}
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
