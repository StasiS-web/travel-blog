import AboutMe from "./AboutMe";
import Category from "./Category";
import LatestPosts from "./LatestPosts";
import ErrorBoundary from "../common/ErrorBoundary";

const Sidebar = () => {
  return (
    <ErrorBoundary>
      <aside id="sidebar">
        <div className="col-3">
          <AboutMe />
          <LatestPosts />
          <Category />
        </div>
      </aside>
    </ErrorBoundary>
  );
};

export default Sidebar;
