import { Button, Checkbox, Tag } from "@chakra-ui/react";
import Filter from "../../../components/filter";
import Footer from "../../../components/footer";
import { Heart } from "lucide-react";
import { useCustomToast } from "../../../hooks/useToast";
import useFavouritesStore from "../../../store/favourites";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../../api";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import Loader from "../../../components/loader";
import EmptyState from "../../../components/empty-state";
import { formatDate, formatDuration, getAirlineName, getAirportName, getRandomFlightImage } from "../../../lib/utils";

interface Iflight {
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

interface ErrorResponse {
    error?: string;
}

export default function FlightListing() {
    const location = useLocation();
    const { addFavourite, removeFavourite, isFavourite } = useFavouritesStore();
    const [data, setData] = useState<Iflight[]>([]);
    const [destination, setDestination] = useState<string>("");
    const [origin, setOrigin] = useState<string>("");
    const [departureDate, setDepartureDate] = useState<string>("");
    const [adults, setAdults] = useState<number>(1);
    const [error, setError] = useState<string | null>(null);
    const showToast = useCustomToast();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    // Initialize state from location.state
    useEffect(() => {
        const { destination, departureDate, origin, passengers } = location.state || {};
        setDestination(destination || "");
        setOrigin(origin || "");
        setDepartureDate(departureDate || "");
        setAdults(passengers || 1);
    }, [location.state]);

    const getFlights = async () => {
        if (!origin || !destination || !departureDate || adults < 1) {
            showToast({ title: "Please fill all required fields", status: "error" });
            setLoading(false);
            return;
        }
        try {
            setLoading(true);
            setError(null);
            const res = await api.get("/api/flight", {
                params: {
                    origin,
                    destination,
                    departureDate,
                    adults,
                },
            });
            setData(res.data || []);
        } catch (err) {
            const axiosError = err as AxiosError<ErrorResponse>;
            let errorMessage = "Failed to load flights";
            if (axiosError.response) {
                errorMessage = axiosError.response.data?.error || `Server error: ${axiosError.response.status}`;
            } else if (axiosError.request) {
                errorMessage = "Network error: Unable to reach the server";
            }
            setError(errorMessage);
            setData([]);
            showToast({ title: errorMessage, status: "error" });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (origin && destination && departureDate && adults >= 1) {
            getFlights();
        }
    }, [origin, destination, departureDate, adults]);

    const handleFavouriteClick = (flight: Iflight) => {
        const favouriteItem = {
            id: flight.id,
            name: flight.name,
            type: "flight" as const,
            img: flight.img,
            departure: flight.departure.time,
            arrival: flight.arrival.time,
            duration: "1h 28m", // Consider calculating from departure/arrival
            reviews: flight.reviews,
            remark: flight.remark,
            ratings: flight.ratings,
            cost: flight.cost,
        };

        if (isFavourite(flight.id)) {
            removeFavourite(flight.id);
            showToast({ title: "Removed from Favourites", status: "info" });
        } else {
            addFavourite(favouriteItem);
            showToast({ title: "Added to Favourites", status: "success" });
        }
    };

    if (loading) return <Loader />;

    if (error) return <EmptyState message={error} />;

    if (!data.length) return <EmptyState message="No flights found for your search." />;

    const isValidAirline = (airlineCode: string) =>
        getAirlineName(airlineCode) !== "Unknown airline";

    return (
        <div className="bg-[#f7f8f8] min-h-screen">
            <Filter>
                {data.map((flight: Iflight) => (
                    <>
                        {isValidAirline(flight.airline) && (
                            <>
                                <div key={flight.id} className="bg-white rounded-2xl p-6 m-4 shadow-md">
                                    <div className="w-[60vw] flex gap-10 mb-6">
                                        <img
                                            src={getRandomFlightImage()}
                                            alt={flight.airline}
                                            className="w-40 h-40 object-cover rounded-lg"
                                        />
                                        <div className="w-full">
                                            <div className="flex justify-between">
                                                <div className="flex items-center gap-4">
                                                    <p className="font-bold text-2xl">{getAirlineName(flight.airline)}</p>
                                                    <Tag colorScheme="green">
                                                        {flight.cabin}
                                                    </Tag>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-500">Starting from</p>
                                                    <p className="font-bold text-[#FF8682] text-2xl">{flight.price}</p>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <div>
                                                    <p className="font-bold text-lg">Departure</p>
                                                    <Checkbox colorScheme="teal">
                                                        {getAirportName(flight.departure.airport)} - {formatDate(flight.departure.time)}
                                                    </Checkbox>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-lg">Arrival</p>
                                                    <Checkbox colorScheme="teal">
                                                        {getAirportName(flight.arrival.airport)} - {formatDate(flight.arrival.time)}
                                                    </Checkbox>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-lg">Duration</p>
                                                    <Checkbox colorScheme="teal">
                                                        {formatDuration(flight.duration)}
                                                    </Checkbox>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="ml-10" />
                                    <div className="flex gap-4 items-center mt-4">
                                        <Button
                                            border="1px"
                                            borderColor="teal"
                                            bg="white"
                                            onClick={() => handleFavouriteClick(flight)}
                                        >
                                            <Heart
                                                fill={isFavourite(flight.id) ? "red" : "white"}
                                                color={isFavourite(flight.id) ? "red" : "red"}
                                            />
                                        </Button>
                                        <Button
                                            w="100%"
                                            bg="#8DD3BB"
                                            onClick={() => navigate(`/flights/listing/${flight.id}`)}
                                        >
                                            Book Now
                                        </Button>
                                    </div>
                                </div></>)}
                    </>
                ))}
            </Filter>
            <Footer />
        </div>
    );
}