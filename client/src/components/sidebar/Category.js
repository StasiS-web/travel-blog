import "./category.css";

const Category = () => {
    return(
        <div className="side animate-box">
          <div className="col-12 col-md-offset-0 text-center heading heading-sidebar">
            <h2>
              <span>Category</span>
            </h2>
          </div>
          <ul className="category">
          <li>
              <a href="#">
                <i className="ri-check-line"></i>Asia
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ri-check-line"></i>South Africa
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ri-check-line"></i>North America
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ri-check-line"></i>South America
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ri-check-line"></i>Europe
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ri-check-line"></i>Australia
              </a>
            </li>
          </ul>
        </div>
    );
}

export default Category;