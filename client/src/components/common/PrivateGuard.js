import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

const PrivateGuard = ({children}) => {
    const { isAuth } = useAuthContext();

    if (!isAuth) {
        return <Navigate to="/login" />;
    }

    return children ? children : <Outlet />
};

export default PrivateGuard;