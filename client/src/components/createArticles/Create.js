import {
  types,
  useNotificationsContext,
} from "../../contexts/NotificationContext";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useService } from "../../hooks/useService";
import { destinationServiceFactory } from "../../services/destinationService";
import { validateArticle } from "../../utils/validationHandler";
import formatDate from "../../utils/dateUtils";
import { notifications } from "../../constants/Constants";
import "./create.css";

const Create = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const { showNotifications } = useNotificationsContext();
  const destinationService = useService(destinationServiceFactory);

  const onCreateSubmit = (event) => {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let title = formData.get("title");
    let imageUrl = formData.get("imageUrl");
    let createdOn = formatDate(formData.get("_createdOn"));
    let category = formData.get("category");
    let content = formData.get("content");

    if (
      title === "" ||
      category === "" ||
      createdOn === "" ||
      imageUrl === "" ||
      content === ""
    ) {
      showNotifications({
        message: notifications.fieldsErrorMsg,
        type: types.error,
      });
      return;
    }

    let articleData = {
      title,
      imageUrl,
      category,
      createdOn,
      content,
    };

    destinationService
      .create(articleData, user.accessToken)
      .then((result) => {
        showNotifications({
          message: notifications.articleCreateMsg,
          type: types.success,
        });
        console.log(result);
        navigate("/destinations");
      })
      .catch((error) => {
        showNotifications({ message: error.message, type: types.error });
        console.log(error);
      });
  };

  const handleClose = (event) => {
    event.preventDefault();
    navigate("/destinations");
  };

  const validateHandler = (event) => {
    let [message, type] = validateArticle(event.target);
    showNotifications({ type, message });
  };

  return (
    <div id="create-page">
      <div className="container">
        <div className="row">
          <div className="col-12 col-offset0 text-center heading">
            <h2>
              <span>Create Articles</span>
            </h2>
          </div>
        </div>
        <div className="col-9 row">
          <form id="create" method="post" onSubmit={onCreateSubmit}>
            <div className="form-group">
              <div className="col-12 field">
                <label htmlFor="title">Title*</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title ..."
                  className="form-control"
                  onBlur={validateHandler}
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
                  onBlur={validateHandler}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-12 field">
                <label htmlFor="category">Select Category*</label>
                <select
                  name="category"
                  id="category"
                  placeholder="Select the category options..."
                >
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
                  maxLength="5000"
                  rows="35"
                  placeholder="Content ..."
                  className="form-control"
                  onBlur={validateHandler}
                ></textarea>
              </div>
            </div>
            <div className="form-group">
              <p className="mandatory">* are mandatory</p>
              <button type="submit" className="btn btn-success">
                Create
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

export default Create;
