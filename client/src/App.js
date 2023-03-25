import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import PrivateRoute from "./components/common/PrivateRoute";
import PublicRoute from "./components/common/PublicRoute";
import Toggle from "./components/toggle/Toggle";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import Destination from "./components/destination/Destination";
import Footer from "./components/footer/Footer";
import GoTop from "./components/top/GoTop";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";
import Profile from "./components/profile/Profile";
import { ProfileEdit } from "./components/profile/ProfileEdit/ProfileEdit";
import Login from "./components/login/Login";
import Create from "./components/createArticles/Create";
import  NotFound from "./components/common/NotFound";
import { ArticleDetails } from "./components/details/ArticleDetails";
import Edit from "./components/editArticle/Edit";
import Register from "./components/register/Register";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/common/ErrorFallback";
import Logout from "./components/logout/Logout";

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
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/details/:postId" element={<ArticleDetails />} />
            <Route path="/contacts" element={<Contacts />} />

            <Route element={<PublicRoute />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile-edit" element={<ProfileEdit />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/destination/create-article" element={<Create />} />
              <Route path="/destination/edit-article/:postId" element={<Edit />} />
            </Route>
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
