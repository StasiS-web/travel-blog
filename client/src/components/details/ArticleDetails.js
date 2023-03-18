import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import formatDate from "../../utils/dateUtils";
import * as destinationService from "../../services/destinationService";

export const ArticleDetails = () => {
    const {articleId} = useParams();
    const [ currentArticle, setCurrentArticle ] = useState({});

    useEffect(() => {
        destinationService.getDestinationById(articleId)
          .then(result =>{
            setCurrentArticle(result);
          });
    })

    return(
      <div id="article-details">
      <div className="content no-pd-top">
        <div className="container">
        <div className="row animate-box">
            <div className="col-12 col-offset0 text-center heading">
              <h2>
                <span>Article Details</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-9 colpadded-right">
              <div className="row">
                <div className="col-12">
                <div className="blog animate-box">
                    <div className="title text-center">
                      <h3>
                        {currentArticle.title}
                      </h3>
                      <span className="posted-on">{formatDate(currentArticle.createdOn)}</span>
                      <span className="category">{currentArticle.category}</span>
                    </div>
                    <img
                        className="img-responsive"
                        src={currentArticle.imageUrl}
                        alt=""
                      />
                    <div className="blog-text">
                      <p>
                        {currentArticle.content}
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
    )
}