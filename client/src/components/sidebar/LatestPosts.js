import "./latestPosts.css";

const LatestPosts = () => {
  return (
    <div className="side animate-box">
      <div className="col-12 col-md-offset-0 text-center heading heading-sidebar">
        <h2>
          <span>Latest Posts</span>
        </h2>
      </div>
      <div className="blog-entry">
        <a href="#">
          <img src="img/blog-1.jpg" className="img-responsive" alt="" />
          <div className="desc">
            <span className="date">Feb. 15, 2023</span>
            <h3>6 of the Best Road Trips</h3>
          </div>
        </a>
      </div>
      <div className="blog-entry">
        <a href="#">
          <img src="img/blog-2.jpg" className="img-responsive" alt="" />
          <div className="desc">
            <span className="date">Jan. 01, 2022</span>
            <h3>10 Awesome Reasons to Visit Aruba </h3>
          </div>
        </a>
      </div>
      <div className="blog-entry">
        <a href="#">
          <img src="img/blog-1.jpg" className="img-responsive" alt="" />
          <div className="desc">
            <span className="date">Dec. 22, 2021</span>
            <h3>How to Make Money from a Travel Blog</h3>
          </div>
        </a>
      </div>
    </div>
  );
}

export default LatestPosts;