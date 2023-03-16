import "./App.css";
import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Toggle from "./components/toggle/Toggle";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import Destination from "./components/destination/Destination";
import Footer from "./components/footer/Footer";
import GoTop from "./components/top/GoTop";
import ErrorBoundary from "./components/common/ErrorBoundary";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";
import Profile from "./components/profile/Profile";
import Login from "./components/login/Login";
import Create from "./components/createPosts/Create";
import NotFound from "./components/common/NotFound";
import { AuthProvider } from "./contexts/AuthContext";
import { paths } from './constants/constants';

const Register = lazy(() => import("./components/register/Register"));

function App() {


  return (
    <> 
     <AuthProvider>
        <ErrorBoundary>
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
              <Route path={paths.contactPath} element={<Contacts />} />
              
              <Route path={paths.loginPath} element={<Login />} />
              <Route path={paths.registerPath} element={<Register />} />

              <Route path={paths.profilePath} element={<Profile/>} />
              <Route path={paths.createPath} element={<Create />} />
            </Routes>
          <Footer />
          <GoTop />
        </Router>
        </ErrorBoundary>
     </AuthProvider>
    </>
  );
}

export default App;
