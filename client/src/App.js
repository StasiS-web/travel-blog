import "./App.css";
import { lazy, Suspense } from "react"
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
import NotFound from "./components/common/NotFound";
import { AuthProvider } from "./contexts/AuthContext";
import { paths } from "./constants/Constants";
import { ArticleDetails } from "./components/details/ArticleDetails";
import ErrorBoundary from "./components/common/ErrorBoundary";

const Register = lazy(() => import("./components/register/Register"));

function App() {
  return (
    <> 
    <ErrorBoundary>
    <AuthProvider>
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
              <Route path={paths.detailsDestinationPath} element={<ArticleDetails />} />
              <Route path={paths.contactPath} element={<Contacts />} />
              
              <Route path={paths.loginPath} element={<Login />} />
              <Route path={paths.registerPath} element={
                <Suspense fallback={<img src="../public/img/loader.gif" alt="" />}>
                  <Register />
                </Suspense>
              } />

              <Route path={paths.profilePath} element={<Profile/>} />
              <Route path={paths.createPath} element={<Create />} />
            </Routes>
          <Footer />
          <GoTop />
        </Router>
     </AuthProvider>
    </ErrorBoundary>
    </>
  );
}

export default App;
