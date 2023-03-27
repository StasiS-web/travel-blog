import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

const PrivateRoute = ({children}) => {
    const { isAuth } = useAuthContext();

    if (!isAuth) {
        return <Navigate to="/login" />;
    }

    return children ? children : <Outlet />
};

export default PrivateRoute;