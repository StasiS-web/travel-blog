import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

const PublicRoute = ({children}) => {
    const { user } = useAuthContext();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children ? children : <Outlet />
};

export default PublicRoute;