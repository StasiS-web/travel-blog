import {} from "../common/form.css";
import { useForm } from "../../hooks/useForm";

const Edit = ({ show, onArticleUpdateSubmit, onArticleUpdateClose, initialValues }) => {
    const { formValues, onChangeHandler, onSubmit } = useForm(initialValues, onArticleUpdateSubmit);
  
    return (
      <div id="edit" show={show} onBlur={onArticleUpdateClose}>
        <div className="container">
          <div className="row" closeButton onHide={onArticleUpdateClose}>
            <div className="col-12 col-offset0 text-center heading">
              <h2>
                <span>Edit Article</span>
              </h2>
            </div>
          </div>
          <div className="col-9 row">
            <form className="edit" onSubmit={onSubmit}>
              <div className="form-group">
                <div className="col-12 field">
                  <label htmlFor="title">Title*</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title ..."
                    className="form-control"
                    value={formValues.title}
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
                    value={formValues.imageUrl}
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
                    value={formValues.category}
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
                    value={formValues.createdOn}
                    onChange={onChangeHandler}
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
                    value={formValues.content}
                    onChange={onChangeHandler}
                  ></textarea>
                </div>
              </div>
              <div className="form-group">
                <p className="mandatory">* are mandatory</p>
                <button type="submit" className="btn btn-success">
                  Update
                </button>
                <button className="btn btn-outline" onClick={onArticleUpdateClose}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default Edit;