import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useCookie } from '../hooks/useCookie';
import { jwtDecode } from "jwt-decode";
import api from '../api';
import { useCustomToast } from '../hooks/useToast';

interface AuthData {
    id: string;
    firstName: string;
    lastName: string;
    email?: string;
}

interface AuthContextType {
    user: AuthData | null;
    setUser: (data: AuthData | null) => void;
    loading: boolean;
}

interface ISession {
    id: string
    firstName: string
    lastName: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const { getAccessToken, removeAccessToken } = useCookie();
    const [user, setUser] = useState<AuthData | null>(null);
    const [loading, setLoading] = useState(true);
    const showToast = useCustomToast();

    const logout = () => {
        removeAccessToken();
        setLoading(false)
        setUser(null);
    }

    const validateSession = async () => {
        setLoading(true)
        try {
            const token = getAccessToken();
            const decoded = jwtDecode(token) as ISession;
            setUser({
                id: decoded.id,
                firstName: decoded.firstName || '',
                lastName: decoded.lastName || ''
            });

            const response = await api.get('/auth/session');
            setUser(response.data.user);
        } catch (error) {
            console.error("Auth validation failed:", error);
            showToast({ title: "You do not have a session, Please Login Again", status: 'error' })
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