import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { destinationServiceFactory } from "../../services/destinationService";
import { useForm } from "../../hooks/useForm";
import { useNotificationsContext, types } from "../../contexts/NotificationContext";
import { useService } from "../../hooks/useService";
import formatDate from "../../utils/dateUtils";
import "../common/forms.css";

const Edit = ({ onArticleUpdateSubmit }) => {
  const navigate = useNavigate();
  const { articleId } = useParams();
  const { showNotifications } = useNotificationsContext();
  const destinationService = useService(destinationServiceFactory)
  const { values, onChangeHandler, onSubmit, changeValues } = useForm({
      _id: '',
      title: '',
      imageUrl: '',
      category: '',
      createdOn: '',
      content: '',
    },
    onArticleUpdateSubmit);

  useEffect(() => {
    destinationService.edit(articleId)
      .then(result => {
        changeValues(result);
      })
      .catch((error) => {
        showNotifications({message: error.message, type: types.error})
        console.log(error);
      });
  }, [articleId]);

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
          <form id="edit" method="post" onSubmit={onSubmit}>
            <div className="form-group">
              <div className="col-12 field">
                <label htmlFor="title">Title*</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title ..."
                  className="form-control"
                  value={values.title}
                  onChange={onChangeHandler}
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
                  value={values.imageUrl}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-6 field">
                <label htmlFor="date">Category*</label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  placeholder="Category ..."
                  className="form-control"
                  value={values.category}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="col-6 field">
                <label htmlFor="date">Created on*</label>
                <input
                  type="date"
                  id="date"
                  name="createdOn"
                  placeholder="Created on ..."
                  className="form-control"
                  value={formatDate(values.createdOn)}
                  onChange={e => formatDate(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-12 field">
                <label htmlFor="content">Content*</label>
                <textarea
                  id="content"
                  name="content"
                  minLength="50"
                  maxLength="600"
                  rows="10"
                  placeholder="Content ..."
                  className="form-control"
                  value={values.content}
                  onChange={onChangeHandler}></textarea>
              </div>
            </div>
            <div className="form-group">
              <p className="mandatory">* are mandatory</p>
              <button type="submit" className="btn btn-success">
                Update
              </button>
              <button className="btn btn-outline" onClick={handleClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;