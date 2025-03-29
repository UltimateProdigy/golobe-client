import { useState } from 'react';
import FlightsFavourites from "../../features/favourites/flights";
import HotelFavourites from "../../features/favourites/hotels";
import useFavouritesStore from "../../store/favourites";

type TabType = 'flights' | 'hotels';

export default function Favourites() {
    const { favourites } = useFavouritesStore();
    const [activeTab, setActiveTab] = useState<TabType>('flights');

    const flightCount = favourites.filter(fav => fav.type === 'flight').length;
    const hotelCount = favourites.filter(fav => fav.type === 'hotel').length;

    return (
        <div>
            <div className="flex gap-[50vw] px-10 py-6 mx-14 shadow-lg">
                <button
                    className="text-left"
                    style={{ borderBottom: `${activeTab === 'flights' ? '2px solid green' : ''}` }}
                    onClick={() => setActiveTab('flights')}
                >
                    <p className="font-semibold">Flights</p>
                    <p className="text-sm">{flightCount} marked</p>
                </button>
                <button
                    className="text-left"
                    style={{ borderBottom: `${activeTab === 'hotels' ? '2px solid green' : ''}` }}
                    onClick={() => setActiveTab('hotels')}
                >
                    <p className="font-semibold">Hotels</p>
                    <p className="text-sm">{hotelCount} marked</p>
                </button>
            </div>

            <div className="p-6">
                {activeTab === 'flights' ? (
                    flightCount > 0 ? (
                        <FlightsFavourites />
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-lg text-gray-500">No flight favorites yet</p>
                        </div>
                    )
                ) : hotelCount > 0 ? (
                    <HotelFavourites />
                ) : (
                    <div className="text-center py-12">
                        <p className="text-lg text-gray-500">No hotel favorites yet</p>
                    </div>
                )}
            </div>
        </div>
    );
}