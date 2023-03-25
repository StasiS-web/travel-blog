import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import * as authServiceFactory from "../../services/authService";

const Logout = () => {
  const navigate = useNavigate();
  const { userLogout } = useAuthContext();

  useEffect(() => {
      authServiceFactory.logout()
        .then(() => {
          userLogout();
          navigate("/");
        });
    }, [userLogout, navigate]);

    return <Navigate to="/" />
}

export default Logout;