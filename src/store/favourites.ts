import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type BaseFavouriteItem = {
    id: number;
    name: string;
    type: 'hotel' | 'flight';
    img: string;
    ratings: number;
    remark: string;
    reviews: number;
    cost: number;
};

type HotelFavourite = BaseFavouriteItem & {
    type: 'hotel';
    amenities: number;
    address: string;
};

type FlightFavourite = BaseFavouriteItem & {
    type: 'flight';
    departure: string;
    arrival: string;
    duration: string;
};

type FavouriteItem = HotelFavourite | FlightFavourite;

type FavouritesStore = {
    favourites: FavouriteItem[];
    setFavourites: (favourites: FavouriteItem[]) => void;
    addFavourite: (item: FavouriteItem) => void;
    removeFavourite: (id: number) => void;
    getFavouritesByType: (type: 'hotel' | 'flight') => FavouriteItem[];
    isFavourite: (id: number) => boolean;
};

const useFavouritesStore = create<FavouritesStore>()(
    persist(
        (set, get) => ({
            favourites: [],
            setFavourites: (favourites) => set({ favourites }),
            addFavourite: (item) =>
                set((state) => {
                    if (state.favourites.some((fav) => fav.id === item.id)) {
                        return state;
                    }
                    return { favourites: [...state.favourites, item] };
                }),
            removeFavourite: (id) =>
                set((state) => ({
                    favourites: state.favourites.filter((item) => item.id !== id),
                })),
            getFavouritesByType: (type) =>
                get().favourites.filter((item) => item.type === type),
            isFavourite: (id) =>
                get().favourites.some((item) => item.id === id),
        }),
        {
            name: 'favourites-storage',
            storage: createJSONStorage(() => localStorage),
            // Optional: Only persist certain fields
            partialize: (state) => ({ favourites: state.favourites }),
        }
    )
);

export default useFavouritesStore;