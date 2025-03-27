import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Loader from "./loader";
import { routes } from "../lib/constants/routes";
export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <Loader />;
    }

    if (!user) {
        return (
            <Navigate
                to={`${routes.auth.login}?redirect=${encodeURIComponent(location.pathname)}`}
                replace
            />
        );
    }

    return <>{children}</>;
};