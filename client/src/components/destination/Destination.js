import "./destination.css";
import Sidebar from "../sidebar/Sidebar";
import DestinationItem from "../destination/destinationItem/DestinationItem";

const Destination = ({
  articles,
}) => {
  return (
    <div id="destination-page">
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
                {articles.map(x => 
                  <DestinationItem key={x._id} {...x} />
                )}

                {articles.length === 0 && (
                   <div className="title text-center">
                   <h3>
                     No articles yet.
                   </h3>
                 </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
