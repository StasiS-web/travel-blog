import "./create.css";
import formatDate from "../../utils/dateUtils";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNotificationsContext, types } from "../../contexts/NotificationContext";
import { notifications } from "../../constants/Constants";
import { useService } from "../../hooks/useService";
import { destinationServiceFactory } from "../../services/destinationService";
import { validateArticle } from "../../utils/validationHandler";


const Create = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const { showNotifications} = useNotificationsContext();
  const destinationService = useService(destinationServiceFactory);

  const onCreateSubmit = (event) => {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let title = formData.get("title");
    let imageUrl = formData.get("imageUrl");
    let createOn = formData.get("createOn");
    let category = formData.get("category");
    let content = formData.get("content");

    if(title === "" || category === "" || content === "" || 
       imageUrl === "" || content === "") {
          showNotifications({message: notifications.fieldsErrorMsg, type: types.error});
          return;
    }

    let publishDate = formatDate(createOn);

    const articleData = {
      title,
      imageUrl,
      category,
      createdOn: publishDate,
      content,
    }

    destinationService.create(articleData, user.accessToken)
      .then(result => {
        showNotifications({message: notifications.articleCreateMsg, type: types.success});
        navigate("/destination")
      })
      .catch((error) => {
        showNotifications({message: error.message, type: types.error});
        console.log(error);
      });
  }

  const handleClose = (event) => {
    event.preventDefault();
    navigate("/destination");
  };

  const validateHandler = (event) => {
    let [message, type] = validateArticle(event.target);
    showNotifications({type, message});
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
                  onBlur={validateHandler}/>
              </div>
              <div className="col-12 field">
                <label htmlFor="imageUrl">ImageUrl*</label>
                <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  placeholder="ImageUrl ..."
                  className="form-control"
                  onBlur={validateHandler}/>
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
                  onBlur={validateHandler}/>
              </div>
              <div className="col-6 field">
                <label htmlFor="date">Created on*</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  placeholder="Created on ..."
                  className="form-control"
                  onBlur={validateHandler} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-12 field">
                <label htmlFor="content">Content*</label>
                <textarea
                  id="content"
                  name="content"
                  minLength="250"
                  maxLength="1200"
                  rows="15"
                  placeholder="Content ..."
                  className="form-control"
                  onBlur={validateHandler}></textarea>
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
}

export default Create;