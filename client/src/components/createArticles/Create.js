import "./create.css";
import { useForm } from "../../hooks/useForm";


const Create = ({show, onArticleCreateSubmit, onArticleCreateClose}) => {
  const { formValues, onChangeHandler, onSubmit } = useForm({ text: ''}, onArticleCreateSubmit);

  return ( 
    <div id="create" show={show} onBlur={onArticleCreateClose}>
      <div className="container">
        <div className="row" closeButton onHide={onArticleCreateClose}>
          <div className="col-12 col-offset0 text-center heading">
            <h2>
              <span>Create Articles</span>
            </h2>
          </div>
        </div>
        <div className="col-9 row">
          <form className="create" onSubmit={onSubmit}>
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
                  name="date"
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
                Create
              </button>
              <button className="btn btn-outline" onClick={onArticleCreateClose}>
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