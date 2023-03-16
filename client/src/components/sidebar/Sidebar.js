import AboutMe from "./AboutMe";
import Category from "./Category";
import LatestPosts from "./LatestPosts";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <div className="col-3">
        <AboutMe />
        <LatestPosts />
        <Category />
      </div>
    </aside>
  );
}

export default Sidebar;
