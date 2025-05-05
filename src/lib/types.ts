export interface LoginResponse {
    message: string;
    user: {
        id: string;
        firstName: string;
        lastName: string;
    };
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
    cardName: string;
    cardNumber: string;
    cvc: string;
    expDate: string;
}

export interface AddCardModalProps {
    isOpen: boolean;
    onClose: () => void;
    onCardAdded: () => void;
}


export interface Iflight {
    id: string;
    airline: string;
    cabin: string;
    remark: string;
    reviews: number;
    price: number;
    departure: { airport: string; time: string };
    arrival: { airport: string; time: string };
    name: string;
    img: string;
    duration: string;
    ratings: number;
    cost: number;
}


export interface StateOption {
    value: string;
    label: string;
}

export interface TripOption {
    key: string;
    label: string;
}

export interface CityOption {
    value: string;
    label: string;
}
