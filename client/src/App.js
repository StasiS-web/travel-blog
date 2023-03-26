import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ArticleProvider } from "./contexts/ArticleContext";
import { AuthProvider } from "./contexts/AuthContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import { ErrorBoundary } from "react-error-boundary";
import About from "./components/about/About";
import ArticleDetails from "./components/details/ArticleDetails";
import Contacts from "./components/contacts/Contacts";
import Create from "./components/createArticles/Create";
import Destination from "./components/destination/Destination";
import Edit from "./components/editArticle/Edit";
import ErrorFallback from "./components/common/ErrorFallback";
import Footer from "./components/footer/Footer";
import GoTop from "./components/top/GoTop";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import NotFound from "./components/common/NotFound";
import PrivateRoute from "./components/common/PrivateRoute";
import Profile from "./components/profile/Profile";
import ProfileEdit from "./components/profile/ProfileEdit/ProfileEdit";
import PublicRoute from "./components/common/PublicRoute";
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
          <Router>
          <Toggle />
          <Navigation />
          <ArticleProvider>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route element={<Toggle />} />
            <Route element={<Navigation />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations" element={<Destination />} />
            <Route path="/destinations/:postId" element={<ArticleDetails />} />
            <Route path="/contacts" element={<Contacts />} />

            <Route element={<PublicRoute />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile-edit" element={<ProfileEdit />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/destinations/create-article" element={<Create />} />
              <Route path="/destinations/edit-article/:postId" element={<Edit />} />
            </Route>
          </Routes>
          </ArticleProvider>
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
