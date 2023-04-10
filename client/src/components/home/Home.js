import React from "react";
import { Link, useParams } from "react-router-dom";
import useScrollTop  from "../../hooks/useScrollTop";
import "../home/home.css";

const  Home = () => {
  const { articleId } = useParams();
  useScrollTop();
  return (
    <div id="home">
      <div id="hero" className="row ml-0 mr-0">
        <div className="col-6 pr-0">
          <div className="card">
            <img className="card-img" src="https://res.cloudinary.com/dnvg6uuxl/image/upload/v1677863934/travel-blog/destination/south-africa_sjjdnh.jpg" alt="" />
            <div className="card-overlay text-center heading">
              <p>South Africa</p>
              <h2>The Best Places to Visit in South Africa</h2>
              <Link to={`/destinations/${articleId}`} className="btn btn-primary">
                READ MORE
              </Link>
            </div>
          </div>
        </div>
        <div className="col-6 pl-0">
          <div className="card">
            <img className="card-img" src="https://res.cloudinary.com/dnvg6uuxl/image/upload/v1677793219/travel-blog/popular/paris_xed1u2.jpg" alt="" />
            <div className="card-overlay text-center heading">
              <p>Europe</p>
              <h2>Trip to Paris Visiting the Tourist Attractions</h2>
              <Link to={`/destinations/${articleId}`} className="btn btn-primary">
                READ MORE
              </Link>
            </div>
          </div>
        </div>

        <div className="col-3 pr-0 first">
          <div className="card">
            <img className="card-img" src="https://res.cloudinary.com/dnvg6uuxl/image/upload/v1677792081/travel-blog/africa_nbnol3.jpg" alt="" />
            <div className="card-overlay heading">
              <h5>South Africa</h5>
            </div>
          </div>
        </div>

        <div className="col-3 pl-0 pr-0">
          <div className="card">
            <img className="card-img" src="https://res.cloudinary.com/dnvg6uuxl/image/upload/v1677792081/travel-blog/europe_nrfovi.jpg" alt="" />
            <div className="card-overlay heading">
              <h5>Europe</h5>
            </div>
          </div>
        </div>

        <div className="col-3 pl-0 pr-0">
          <div className="card">
            <img className="card-img" src="https://res.cloudinary.com/dnvg6uuxl/image/upload/v1677792081/travel-blog/north-america_cu9owp.jpg" alt="" />
            <div className="card-overlay heading">
            <h5>America</h5>
            </div>
          </div>
        </div>

        <div className="col-3 pl-0 last">
          <div className="card">
            <img className="card-img" src="https://res.cloudinary.com/dnvg6uuxl/image/upload/v1677792081/travel-blog/australia_azxeqa.jpg" alt="" />
            <div className="card-overlay heading">
            <h5>Australia</h5>
            </div>
          </div>
        </div>
      </div>

      <div id="blog-popular">
        <div className="container">
          <div className="row animate-box">
            <div className="col-12 col-offset0 text-center heading">
              <h2>
                <span>Popular Post</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="blog animate-box">
                <Link to={`/destinations/${articleId}`}>
                  <img className="img-responsive" src="https://res.cloudinary.com/dnvg6uuxl/image/upload/v1677797444/travel-blog/popular/hiking-canada_ubwtfl.jpg" alt="" />
                </Link>
                <div className="blog-text">
                  <h3>
                    <Link to={`/destinations/${articleId}`}>Hiking in Canada</Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="blog animate-box">
                <Link to={`/destinations/${articleId}`}>
                  <img className="img-responsive" src="https://res.cloudinary.com/dnvg6uuxl/image/upload/v1677793405/travel-blog/popular/caribbean_efthqn.jpg" alt="" />
                </Link>
                <div className="blog-text">
                  <h3>
                    <Link to={`/destinations/${articleId}`}>20 Most Beautiful Caribbean Islands</Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="blog animate-box">
                <Link to={`/destinations/${articleId}`}>
                  <img className="img-responsive" src="https://res.cloudinary.com/dnvg6uuxl/image/upload/v1677864594/travel-blog/destination/shri-lanka_c3b69x.jpg" alt="" />
                </Link>
                <div className="blog-text">
                  <h3>
                    <Link to={`/destinations/${articleId}`}>Shri Lanka</Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="blog animate-box">
                <Link to={`/destinations/${articleId}`}>
                  <img className="img-responsive" src="https://res.cloudinary.com/dnvg6uuxl/image/upload/v1677864970/travel-blog/destination/sagrada-fam%C3%ADlia_lgwlml.jpg" alt="" />
                </Link>
                <div className="blog-text">
                  <h3>
                  <Link to={`/destinations/${articleId}`}>Sagrada Família by the Architect Antoni Gaudí</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="instagram">
        <div className="container">
          <div className="row animate-box">
            <div className="col-12md col-md-offset0 text-center heading">
              <h2>
                <span>Instagram Posts</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3 nopadding animate-box"
            data-animate-effect="fadeIn">
            <div className="insta">
              <img src="https://res.cloudinary.com/dnvg6uuxl/image/upload/v1677792080/travel-blog/insta-post1_b8qhok.jpg" alt="" />
            </div>
          </div>
          <div className="col-3 nopadding animate-box" data-animate-effect="fadeIn">
            <div className="insta">
              <img src="https://res.cloudinary.com/dnvg6uuxl/image/upload/v1677792080/travel-blog/insta-post2_ytvmnd.jpg" alt="" />
            </div>
          </div>
          <div className="col-3 nopadding animate-box"
            data-animate-effect="fadeIn">
            <div className="insta">
              <img src="https://res.cloudinary.com/dnvg6uuxl/image/upload/v1677792080/travel-blog/insta-post3_arafve.jpg" alt="" />
            </div>
          </div>
          <div className="col-3 nopadding animate-box" data-animate-effect="fadeIn">
            <div className="insta">
              <img src="https://res.cloudinary.com/dnvg6uuxl/image/upload/v1677792080/travel-blog/insta-post4_pcmmer.jpg" alt="" />
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;