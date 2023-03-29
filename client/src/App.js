import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ArticleProvider } from "./contexts/ArticleContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/common/ErrorFallback";
import PrivateGuard from "./components/common/PrivateGuard";
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
      <ArticleProvider>
      <AuthProvider>
        
        <NotificationProvider>
          <Router>
          <Toggle />
          <Navigation />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route element={<Toggle />} />
            <Route element={<Navigation />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations" element={<Destination />} />
            <Route path="/destinations/:articleId" element={<ArticleDetails />} />
            <Route path="/contacts" element={<Contacts />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

            <Route element={<PrivateGuard />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile-edit" element={<ProfileEdit />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/destinations/create-article" element={<Create />} />
              
            </Route>
            <Route path="/destinations/edit-article/:articleId" element={<Edit />} />
          </Routes>
           <Footer />
           <GoTop />
          </Router>
        </NotificationProvider>
      </AuthProvider>
      </ArticleProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
