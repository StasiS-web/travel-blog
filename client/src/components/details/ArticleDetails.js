import { useEffect, useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { types, useNotificationsContext } from "../../contexts/NotificationContext";
import { ArticleContext } from "../../contexts/ArticleContext";
import * as likeService from "../../services/likeService";
import * as commentService from "../../services/commentService";
import * as destinationService from "../../services/destinationService";
import { notifications, paths } from "../../constants/Constants";
import "./articleDetails.css";

const ArticleDetails = () => {
  const { user } = useAuthContext();
  const { articleId } = useParams();
  const { showNotifications } = useNotificationsContext();
  const { fetchArticleDetails, selectArticle,
          articleRemove, addComment } = useContext(ArticleContext);
  const [likes, setLikes] = useState(false);
  const navigate = useNavigate();

  const currentArticle = selectArticle(articleId);
  const isOwner = currentArticle?._ownerId === user?._id;

  useEffect(() => {
    try {
      const articleDetails = destinationService.getOneDestination(articleId);
      const isLiked = articleDetails.likes?.some((userId) => userId === user?._id);
      console.log(articleDetails);
      const articleComments = commentService.getComment(articleId);
      if (articleDetails && articleComments) {
        fetchArticleDetails(articleId, {
          ...articleDetails,
          comments: articleComments.map((x) => `${x.user.email}: ${x.text}`),
        });
      }
  
      if (isLiked) {
        setLikes(true);
      }
    } catch (error) {
      console.log("Error fetching article details:", error);
    };
  }, [articleId, destinationService, fetchArticleDetails, user?._id]); 

  const onEdit = (event) => {
    event.preventDefault();
    navigate(`/destinations/edit-article/${articleId}`);
  };

  const onCreateComment = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const comment = formData.get('comment');

    if(comment !== ""){
      commentService.createComment(articleId, comment)
        .then(result => {
          addComment(articleId, comment);
        })
        .catch(error => {
          console.log(error);
        });
        event.target.reset();
    }
  };

  const onLikeDislike = async () => {
    try{
      if(likes) {
        await likeService.dislike(articleId, user.accessToken);
        setLikes(false);
      }
      else{
        await likeService.likes(articleId, user.accessToken);
        setLikes(true, () => {
          showNotifications({
            type: types.success,
            message: notifications.likeSucceededMsg,
          });
        });
      }
    }
    catch(error) {
          console.log(error);
          navigate(paths.error404Path);
      }
    };

  const onDelete = () => {
    const confirmAction = window.confirm(
      `Are you sure you want to delete ${currentArticle.title}?`
    );
    if (confirmAction) {
      destinationService.remove(articleId, user.accessToken)
       .then(() => {
          articleRemove(articleId);
          navigate("/destinations");
       });
    }
  };

  const ownerBtn = (
    <div className="admin-btn">
      <button className="btn btn-outline edit-btn" onClick={onEdit}>
        <i className="ri-edit-box-fill"></i>
      </button>
      <button className="btn btn-danger" onClick={onDelete}>
        <i className="ri-delete-bin-2-fill"></i>
      </button>
    </div>
  );

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

                    {isOwner ? (
                      ownerBtn
                    ) : (
                      <>
                        {user.email ? (
                          <div className="user-action">
                            <div className="likes">
                              <div className="text-info">
                                <p>
                                  <strong>Likes:</strong> 
                                  {likes ? (
                                    <span id="likes">{currentArticle.likes ? currentArticle.likes.length + 1 : 1}</span>
                                    ) : (
                                   <span id="likes">{currentArticle.likes ? currentArticle.likes.length : 0}</span>
                                  )}
                                </p>
                                <button className="btn btn-success" onClick={onLikeDislike}>
                                  {likes ? (
                                    <i className="ri-thumb-down-fill" style={{ color: "red" }}></i>
                                  ) : (
                                    <i className="ri-thumb-up-fill" style={{ color: "#4A5D23" }}></i>
                                  )}
                                </button>
                              </div>
                            </div>
                            <div className="text-center text-heading">
                              <h2>Comments</h2>
                            </div>
                            {currentArticle && currentArticle.comments && currentArticle.comments.map((comment, index) => (
                              <ul>
                                <li key={index} className="comment-text">
                                  <p>Content: {comment}</p>
                                </li>
                              </ul>
                            ))}
                            {!currentArticle.comments && (
                              <div className="text-center">
                                <p>No comments yet.</p>
                              </div>
                            )}
                            <article className="create-comment">
                              <form method="post" onSubmit={onCreateComment}>
                                <div className="form-group">
                                  <div className="col-12 field">
                                    <label htmlFor="comment">Comment</label>
                                    <textarea
                                      id="comment"
                                      name="comment"
                                      placeholder="Write a new comment ..."
                                      className="form-control"
                                    ></textarea>
                                    <button
                                      type="submit"
                                      className="btn btn-success"
                                    >
                                      Add Comment
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </article>
                          </div>
                        ) : (
                          <></>
                        )}
                      </>
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
