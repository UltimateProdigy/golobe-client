export interface LoginResponse {
    message: string;
    user: {
        id: string;
        firstName: string;
        lastName: string;
    }
    accessToken: string;
}

export interface AuthState {
    id: string;
    firstName: string;
    lastName: string;
}

export interface RouteConfig {
    path: string;
    element: React.ReactNode;
    protected?: boolean;
}