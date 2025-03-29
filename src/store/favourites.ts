import { create } from "zustand";

// Base properties common to all favorites
type BaseFavouriteItem = {
    id: number;
    name: string;
    type: 'hotel' | 'flight';
    img: string;
};

// Hotel-specific properties
type HotelFavourite = BaseFavouriteItem & {
    type: 'hotel';
    ratings: number;
    remark: string;
    reviews: number;
    cost: number;
    amenities: number;
    address: string;
};

// Flight-specific properties
type FlightFavourite = BaseFavouriteItem & {
    type: 'flight';
    departure: string;
    arrival: string;
    duration: string;
    airline: string;
    price: number;
};

// Union type for all possible favorites
type FavouriteItem = HotelFavourite | FlightFavourite;

type FavouritesStore = {
    favourites: FavouriteItem[];
    setFavourites: (favourites: FavouriteItem[]) => void;
    addFavourite: (item: FavouriteItem) => void;
    removeFavourite: (id: number) => void;
    getFavouritesByType: (type: 'hotel' | 'flight') => FavouriteItem[];
    isFavourite: (id: number) => boolean;
};

const useFavouritesStore = create<FavouritesStore>((set, get) => ({
    favourites: [],
    setFavourites: (favourites) => set({ favourites }),
    addFavourite: (item) =>
        set((state) => {
            if (state.favourites.some(fav => fav.id === item.id)) {
                return state;
            }
            return { favourites: [...state.favourites, item] };
        }),
    removeFavourite: (id) =>
        set((state) => ({
            favourites: state.favourites.filter((item: any) => item.id !== id),
        })),
    getFavouritesByType: (type) =>
        get().favourites.filter(item => item.type === type),
    isFavourite: (id) =>
        get().favourites.some((item: any) => item.id === id),
}));

export default useFavouritesStore;