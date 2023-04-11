import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ArticleProvider } from "./contexts/ArticleContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/common/ErrorFallback";
import PrivateGuard from "./components/common/PrivateGuard";
import { paths } from "./constants/Constants";
import About from "./components/about/About";
import ArticleDetails from "./components/details/ArticleDetails";
import Contacts from "./components/contacts/Contacts";
import Create from "./components/createArticles/Create";
import Destination from "./components/destination/Destination";
import Edit from "./components/editArticle/Edit";
import Footer from "./components/footer/Footer";
import GoTop from "./components/top/GoTop";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import NotFound from "./components/common/NotFound";
import Profile from "./components/profile/Profile";
import ProfileEdit from "./components/profile/ProfileEdit/ProfileEdit";
import Navigation from "./components/navigation/Navigation";
import Register from "./components/register/Register";
import Toggle from "./components/toggle/Toggle";
import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
      <AuthProvider>
        <NotificationProvider>
        <ArticleProvider>
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

            <Route element={<PrivateGuard />}>
              <Route path={paths.profilePath} element={<Profile />} />
              <Route path={paths.editProfile} element={<ProfileEdit />} />
              <Route path={paths.logoutPath} element={<Logout />} />
              <Route path={paths.createArticlePath} element={<Create />} />
              <Route path={paths.updateArticlePath} element={<Edit />} />
            </Route>
          </Routes>
          <GoTop />
          <Footer />
          </Router>
          </ArticleProvider>
        </NotificationProvider>
      </AuthProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
