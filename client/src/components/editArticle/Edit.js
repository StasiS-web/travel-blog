import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as destinationService from "../../services/destinationService";
import useArticleState from "../../hooks/useArticleState";
import { useAuthContext } from "../../contexts/AuthContext";
import { ArticleContext } from "../../contexts/ArticleContext";
import { useNotificationsContext, types } from "../../contexts/NotificationContext";
import "../common/forms.css";


const Edit = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { articleId } = useParams();
  const { articleEdit } = useContext(ArticleContext);
  const [ article, setArticle ] = useArticleState(articleId)
  const { showNotifications } = useNotificationsContext();

  const onChangeCategory = (event) => {
    setArticle({...article, category: event.target.value});
  }

  useEffect(() => {
    destinationService.getOneDestination(articleId)
      .then(articleData => {
        setArticle(articleData);
      });
  }, [articleId, user.accessToken]);

 const onEditSubmit = (event) => {
  event.preventDefault();

  let formData = new FormData(event.currentTarget);
  let title = formData.get("title");
  let imageUrl = formData.get("imageUrl");
  let category = formData.get("category");
  let content = formData.get("content");

  const data = { title, imageUrl, category, content};

  destinationService.edit(articleId, data, user.accessToken)
      .then(result => {
        if (result.ok) {
          return result.json();
        }
      })
      .then(data => {
        articleEdit(articleId, data);
        navigate(`/destinations/${articleId}`);
      })
      .catch((error) => {
        showNotifications({message: error.message, type: types.error})
        console.log(error);
      });
 }

  const handleClose = (event) => {
    event.preventDefault();
    navigate("/destinations");
  };

  return (
    <div id="edit-page">
      <div className="container">
        <div className="row">
          <div className="col-12 col-offset0 text-center heading">
            <h2>
              <span>Edit Article</span>
            </h2>
          </div>
        </div>
        <div className="col-9 row">
          <form id="edit" method="post" onSubmit={onEditSubmit}>
            <div className="form-group">
              <div className="col-12 field">
                <label htmlFor="title">Title*</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title ..."
                  className="form-control"
                  defaultValue={article.title}
                />
              </div>
              <div className="col-12 field">
                <label htmlFor="imageUrl">ImageUrl*</label>
                <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  placeholder="ImageUrl ..."
                  className="form-control"
                  defaultValue={article.imageUrl}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-12 field">
                <label htmlFor="category">Select Category*</label>
                <select name="category" id="category" placeholder="Select the category options..." value={article.category} onChange={onChangeCategory}>
                  <option value="asia">Asia</option>
                  <option value="south africa">South Africa</option> 
                  <option value="north america">North America</option>
                  <option value="south america">South America</option> 
                  <option value="europe">Europe</option>
                  <option value="australia">Australia</option> 
                </select>
              </div>
            </div>
            <div className="form-group">
              <div className="col-12 field">
                <label htmlFor="content">Content*</label>
                <textarea
                  id="content"
                  name="content"
                  minLength="150"
                  maxLength="6000"
                  rows="35"
                  placeholder="Content ..."
                  className="form-control"
                  defaultValue={article.content}></textarea>
              </div>
            </div>
            <div className="form-group">
              <div className="col-12 field">
              <p className="mandatory">* are mandatory</p>
              <button type="submit" className="btn btn-success">
                Update
              </button>
              <button className="btn btn-outline" onClick={handleClose}>
                Cancel
              </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;