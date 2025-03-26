import { createContext, useContext, ReactNode, useState } from 'react';

interface AuthData {
    id: string;
    firstName: string;
    lastName: string;
}

interface AuthContextType {
    auth: AuthData | null;
    setAuth: (data: AuthData | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [auth, setAuth] = useState<AuthData | null>(null);
    

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
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