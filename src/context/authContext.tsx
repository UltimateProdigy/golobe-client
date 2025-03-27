import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useCookie } from '../hooks/useCookie';
import { jwtDecode } from "jwt-decode";
// import api from '../api';
import { useNavigate } from 'react-router-dom';
import { routes } from '../lib/constants/routes';


interface AuthData {
    id: string;
    firstName: string;
    lastName: string;
    email?: string; // Added for JWT claims
}

interface AuthContextType {
    user: AuthData | null;
    setUser: (data: AuthData | null) => void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const { getAccessToken, removeAccessToken } = useCookie();
    const [user, setUser] = useState<AuthData | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const logout = () => {
        removeAccessToken();
        setUser(null);
        navigate(routes.auth.login);
    }

    const validateSession = async () => {
        setLoading(true)
        try {
            // 1. Client-side immediate validation
            const token = getAccessToken();
            const decoded = jwtDecode(token) as any;
            setUser({
                id: decoded.userId,
                firstName: decoded.firstName || '',
                lastName: decoded.lastName || ''
            });

            // // 2. Server-side validation
            // const response = await api.get('/auth/session');
            // setUser(response.data.user);
        } catch (error) {
            console.error("Auth validation failed:", error);
            logout();
            setLoading(false);
        }
    };

    useEffect(() => {
        const token = getAccessToken();
        if (token) validateSession();
        else logout()
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};