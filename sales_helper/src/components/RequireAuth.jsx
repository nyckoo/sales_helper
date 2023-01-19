import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { axiosInstance } from "../axios";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.token
            ? <Navigate to="/dashboard" state={{ from: location }} replace />
            : <Navigate to="/unauthorized" state={{ from: location }} replace />
    );
}

export default RequireAuth;