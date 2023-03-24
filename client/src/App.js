import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Toggle from "./components/toggle/Toggle";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import Destination from "./components/destination/Destination";
import Footer from "./components/footer/Footer";
import GoTop from "./components/top/GoTop";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";
import Profile from "./components/profile/Profile";
import Login from "./components/login/Login";
import Create from "./components/createArticles/Create";
import  NotFound from "./components/common/NotFound";
import { AuthProvider } from "./contexts/AuthContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import { paths } from "./constants/Constants";
import { ArticleDetails } from "./components/details/ArticleDetails";
import Edit from "./components/editArticle/edit";
import Register from "./components/register/Register";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/common/ErrorFallback";

function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
      <AuthProvider>
        <NotificationProvider>
          <Router>
          <Toggle />
          <Navigation />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route element={<Toggle />} />
            <Route element={<Navigation />} />
            <Route path={paths.homePath} element={<Home />} />
            <Route path={paths.aboutPath} element={<About />} />
            <Route path={paths.destinationsPath} element={<Destination />} />
            <Route path={paths.detailsPath} element={<ArticleDetails />} />
            <Route path={paths.contactPath} element={<Contacts />} />

              <Route path={paths.loginPath} element={<Login />} />
              <Route path={paths.registerPath} element={<Register />} />

              <Route path={paths.profilePath} element={<Profile />} />
              <Route path={paths.createPath} element={<Create />} />
              <Route path={paths.updateArticleById} element={<Edit />} />
            </Routes>
            <Footer />
            <GoTop />
          </Router>
        </NotificationProvider>
      </AuthProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
