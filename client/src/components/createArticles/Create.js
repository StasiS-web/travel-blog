import "./create.css";
import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";
import formatDate from "../../utils/dateUtils";

const Create = ({onCreateArticleSubmit, }) => {
  const { values, onChangeHandler, onSubmit } = useForm({
    title: '',
    imageUrl: '',
    category: '',
    createdOn: '',
    content: '',
}, onCreateArticleSubmit);
  
 useEffect(() => {document.getElementById("create-page").classList.add("active")}, []);
  
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
          <form id="create" method="post" onSubmit={onSubmit}>
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
                  onChange={onChangeHandler}/>
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
                  onChange={onChangeHandler}/>
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
                  onChange={onChangeHandler}/>
              </div>
              <div className="col-6 field">
                <label htmlFor="date">Created on*</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  placeholder="Created on ..."
                  className="form-control"
                  value={formatDate(values.createdOn)}
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
                  minLength="250"
                  maxLength="1200"
                  rows="15"
                  placeholder="Content ..."
                  className="form-control"
                  value={values.content}
                  onChange={onChangeHandler}></textarea>
              </div>
            </div>
            <div className="form-group">
              <p className="mandatory">* are mandatory</p>
              <button type="submit" className="btn btn-success">
                Create
              </button>
              <button className="btn btn-outline">
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