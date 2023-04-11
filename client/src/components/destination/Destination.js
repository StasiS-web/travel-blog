import { useEffect, useState } from "react";
import { destinationServiceFactory } from "../../services/destinationService";
import { useService } from "../../hooks/useService";
import useScrollTop  from "../../hooks/useScrollTop";
import DestinationItem from "../destination/destinationItem/DestinationItem";
import Sidebar from "../sidebar/Sidebar";
import "./destination.css";

const Destination = () => {
  const [ articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const destinationService = useService(destinationServiceFactory);
  useScrollTop();
  
  useEffect(() => {
    setLoading(true);
    destinationService
      .getAll()
      .then((result) => {
        setArticles(result); 
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [destinationServiceFactory]);
  

  let loader = (
    <div className="loader">
      <img src="../../img/loader.gif" alt="" />
    </div>
  );

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
                      <h3>Intro</h3>
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
                {articles.length > 0 ? (
                  articles.map(
                    article => (
                      <DestinationItem
                        key={article._id}
                        article={article}
                      ></DestinationItem>
                    )
                  )
                ) : loading ? (
                  loader
                ) : (
                  <div className="title text-center">
                    <h3>No articles yet.</h3>
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
