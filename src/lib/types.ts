export interface LoginResponse {
    message: string;
    id: string;
    firstName: string;
    lastName: string;
    accessToken: string;
}

export interface AuthState {
    id: string;
    firstName: string;
    lastName: string;
}