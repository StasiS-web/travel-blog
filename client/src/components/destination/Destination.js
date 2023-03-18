import "./destination.css";
import { paths } from "../../constants/Constants";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const Destination = () => {
  return (
    <div id="destination">
      <div className="content no-pd-top">
        <div className="container">
          <div className="row animate-box">
            <div className="col-12 col-offset0 text-center heading">
              <h2>
                <span>Destination</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <Sidebar />
            <div className="col-9 colpadded-right">
              <div className="row">
                <div className="col-12">
                  <div className="blog animate-box">
                    <div className="title title-pin text-center">
                      <h3>
                        Intro
                      </h3>
                    </div>
                    <div className="blog-text text-center">
                      <p>
                        If you are looking to plan your vacation? Below you will
                        find some destination around the world or visit some of
                        the available categories to find more information about
                        any destination.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="blog animate-box">
                    <div className="title text-center">
                      <span className="posted-on">Nov. 15th 2016</span>
                      <h3>
                        <Link to="{paths.detailsDestinationPath}">Modeling &amp; Stylist in USA</Link>
                      </h3>
                      <span className="category">Asia</span>
                    </div>
                    <a href="#">
                      <img
                        className="img-responsive"
                        src="img/blog-2.jpg"
                        alt=""
                      />
                    </a>
                    <div className="blog-text text-center">
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="blog animate-box">
                    <div className="title text-center">
                      <span className="posted-on">Nov. 15th 2016</span>
                      <h3>
                      <Link to={paths.detailsDestinationPath}>Modeling &amp; Stylist in USA</Link>
                      </h3>
                      <span className="category">Europe</span>
                    </div>
                    <a href="#">
                      <img
                        className="img-responsive"
                        src="img/blog-1.jpg"
                        alt=""
                      />
                    </a>
                    <div className="blog-text text-center">
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="blog animate-box">
                    <div className="title text-center">
                      <span className="posted-on">Nov. 15th 2016</span>
                      <h3>
                      <Link to={paths.detailsDestinationPath}>Modeling &amp; Stylist in USA</Link>
                      </h3>
                      <span className="category">Australia</span>
                    </div>
                    <a href="#">
                      <img
                        className="img-responsive"
                        src="img/blog-2.jpg"
                        alt=""
                      />
                    </a>
                    <div className="blog-text text-center">
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="blog animate-box">
                    <div className="title text-center">
                      <span className="posted-on">Nov. 15th 2016</span>
                      <h3>
                      <Link to={paths.detailsDestinationPath}>Modeling &amp; Stylist in USA</Link>
                      </h3>
                      <span className="category">North America</span>
                    </div>
                    <a href="#">
                      <img
                        className="img-responsive"
                        src="img/blog-1.jpg"
                        alt=""
                      />
                    </a>
                    <div className="blog-text text-center">
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="blog animate-box">
                    <div className="title text-center">
                      <span className="posted-on">Nov. 15th 2016</span>
                      <h3>
                      <Link to={paths.detailsDestinationPath}>Modeling &amp; Stylist in USA</Link>
                      </h3>
                      <span className="category">Australia</span>
                    </div>
                    <a href="#">
                      <img
                        className="img-responsive"
                        src="img/blog-2.jpg"
                        alt=""
                      />
                    </a>
                    <div className="blog-text text-center">
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="blog animate-box">
                    <div className="title text-center">
                      <span className="posted-on">Nov. 15th 2016</span>
                      <h3>
                      <Link to={paths.detailsDestinationPath}>Modeling &amp; Stylist in USA</Link>
                      </h3>
                      <span className="category">North America</span>
                    </div>
                    <a href="#">
                      <img
                        className="img-responsive"
                        src="img/blog-1.jpg"
                        alt=""
                      />
                    </a>
                    <div className="blog-text text-center">
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                    </div>
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

export default Destination;
