import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useCookie } from '../hooks/useCookie';
import { jwtDecode } from "jwt-decode";
// import api from '../api';

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

    const logout = () => {
        removeAccessToken();
        setLoading(false)
        setUser(null);
    }

    const validateSession = async () => {
        setLoading(true)
        try {
            // 1. Client-side immediate validation
            const token = getAccessToken();
            const decoded = jwtDecode(token) as any;
            setUser({
                id: decoded.id,
                firstName: decoded.firstName || '',
                lastName: decoded.lastName || ''
            });

            // // 2. Server-side validation
            // const response = await api.get('/auth/session');
            // setUser(response.data.user);
        } catch (error) {
            console.error("Auth validation failed:", error);
            logout();
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        validateSession();
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