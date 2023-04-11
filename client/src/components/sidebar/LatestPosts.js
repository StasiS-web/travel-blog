import { useContext } from "react";
import { ArticleContext } from "../../contexts/ArticleContext";
import LatestPostItem from "./LatestPostItem";
import "./latestPosts.css";

const LatestPosts = () => {
  const {articles} = useContext(ArticleContext);
  let articlesLength = articles.length;
  let latestArticles = articles.slice(articlesLength-3, articlesLength);

  return (
    <div className="side animate-box">
      <div className="col-12 col-md-offset-0 text-center heading heading-sidebar">
        <h2>
          <span>Latest Posts</span>
        </h2>
      </div>
      {latestArticles.length > 0 ? (
        latestArticles.map(article => {
          return (
            <LatestPostItem
              key={article._id}
              articleId={article._id}
              imageUrl={article.imageUrl}
              title={article.title}
            ></LatestPostItem>
          );
        })
      ) : (
        <div className="title text-center">
          <h3>No articles yet.</h3>
        </div>
      )}
    </div>
  );
};

export default LatestPosts;
