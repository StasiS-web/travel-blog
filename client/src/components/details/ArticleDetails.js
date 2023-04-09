import { useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { ArticleContext } from "../../contexts/ArticleContext";
import { useService } from "../../hooks/useService";
import { destinationServiceFactory } from "../../services/destinationService";
import "./articleDetails.css";

const ArticleDetails = () => {
  const { user } = useAuthContext();
  const { postId } = useParams();
  const { fetchArticleDetails, articleRemove, selectArticle } = useContext(ArticleContext);
  const destinationService = useService(destinationServiceFactory);
  const navigate = useNavigate();

  const currentArticle = selectArticle(postId);
  const isOwner = currentArticle?._ownerId === user._id;

  useEffect(() => {
    const getArticleDetails = async () => {
      try {
        const articleDetails = await destinationService.getOneDestination(postId);
        fetchArticleDetails(postId, { ...articleDetails });
      } catch (error) {
        console.log(error);
      }
    };

    getArticleDetails();
  }, [postId, destinationService, fetchArticleDetails]);

  const onDelete = async () => {
    const deleteAction = window.confirm(
      `Are you sure you want to delete ${currentArticle.title}?`
    );
    if (deleteAction) {
      await destinationService.delete(postId).then(() => {
        articleRemove(postId);
        navigate("/destination");
      });
    }
  };

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
                        <Link
                          to={`/destination/edit-article/${postId}`}
                          className="btn btn-outline edit-btn"
                        >
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

export default ArticleDetails;
