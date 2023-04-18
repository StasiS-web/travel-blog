import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";

const Logout = () => {
  const navigate = useNavigate();
  const { user, userLogout } = useAuthContext();

  useEffect(() => {
    authService.logout()
      .then(() => {
        userLogout();
        navigate("/");
      })
    }, [user.accessToken, user.email, userLogout, navigate]);
  return <Navigate to="/" />;
}

export default Logout;
