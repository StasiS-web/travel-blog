import "../common/forms.css";
import Category from "../sidebar/Category";

const Contacts = () => {
  return (
    <div id="contact" className="no-pd-top">
      <div className="container">
        <div className="row animate-box">
          <div className="col-12 col-offset0 text-center heading">
            <h2>
              <span>Contact Us</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <aside id="sidebar">
            <div className="col-3">
              <Category />
            </div>
          </aside>
          <div className="col-9 col-padded-right">
            <form action="#">
              <div className="form-group row">
                <div className="col-6 field">
                  <label htmlFor="firstname">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstname"
                    className="form-control"/>
                </div>
                <div className="col-6 field">
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    type="lastName"
                    name="lastName"
                    id="lastName"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-6 field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                  />
                </div>
                <div className="col-6 field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-12 field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    className="form-control"
                  ></textarea>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-12 field">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Send Message" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;