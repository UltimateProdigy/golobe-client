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
export interface IProfile {
    firstName: string;
    lastName: string;
    id: string;
    createdAt: string;
    email: string;
    phoneNumber: string;
    address: string;
    dateOfBirth: string;
}

export interface ICard {
    map: any;
    cardName: string;
    cardNumber: string;
    cvc: string
    expDate: string
}
