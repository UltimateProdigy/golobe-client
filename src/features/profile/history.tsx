import { useEffect, useState } from "react";
import api from "../../api";
import EmptyState from "../../components/empty-state";

type TabType = 'flights' | 'hotels';

interface IBooking {
    id: number;
    origin: string
}

export default function History() {
    const [activeTab, setActiveTab] = useState<TabType>('flights');
    const [booking, setBooking] = useState<IBooking[]>([]);

    const getBooking = async () => {
        try {
            const res = await api.get("/api/booking")
            setBooking(res.data)
            console.log(booking)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getBooking()
    }, [])


    return (
        <div>
            <p className="font-bold text-3xl">Tickets/Bookings</p>
            <div className="flex gap-[50vw] px-10 py-6 shadow-lg">
                <button
                    className="text-left"
                    style={{ borderBottom: `${activeTab === 'flights' ? '2px solid green' : ''}` }}
                    onClick={() => setActiveTab('flights')}
                >
                    <p className="font-semibold">Flights</p>
                </button>
                <button
                    className="text-left"
                    style={{ borderBottom: `${activeTab === 'hotels' ? '2px solid green' : ''}` }}
                    onClick={() => setActiveTab('hotels')}
                >
                    <p className="font-semibold">Hotels</p>
                </button>
            </div>
            {booking?.length < 0 ? (
                <>
                    <EmptyState message="No booking found" />
                </>
            ) : (
                <>

                </>
            )}

            {/* <div className="p-6">
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
            </div> */}
        </div>
    )
}