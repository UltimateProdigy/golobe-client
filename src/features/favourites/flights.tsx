import { Box, Button, Checkbox } from "@chakra-ui/react";
import useFavouritesStore from "../../store/favourites";
import { Heart } from "lucide-react";
import { getFlightIcon } from "../../pages/flights/listing/data";
import { useNavigate } from "react-router-dom";

export default function FlightsFavourites() {
    const navigate = useNavigate()
    const { favourites, removeFavourite } = useFavouritesStore();

    const handleFavouriteClick = (flightId: string) => {
        removeFavourite(flightId);
    };

    const flightFavourites = favourites.filter(fav => fav.type === 'flight');

    if (flightFavourites.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-lg text-gray-500">No Flight favorites yet</p>
            </div>
        );
    }

    return (
        <div>
            {flightFavourites.map((data) => (
                <div key={data.id} className="bg-white rounded-2xl p-6 m-4 shadow-md mx-8">
                    <div className="w-[60vw] flex gap-10 mb-6">
                        <img
                            src={getFlightIcon(data.name)}
                            alt={data.name}
                            className="w-40 h-40 object-cover rounded-lg"
                        />
                        <div className="w-full">
                            <div className="flex flex-col md:flex-row justify-between">
                                <div className="flex items-center gap-2">
                                    <Box borderRadius={5} px={2} py={1} border='1px' bg='white' borderColor='teal'>
                                        {data.ratings}
                                    </Box>
                                    <p className="font-semibold">{data.remark}</p>
                                    <p className="text-sm">{data.reviews} reviews</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Starting from</p>
                                    <p className="font-bold text-[#FF8682] text-2xl">${data.cost}</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div>
                                    <Checkbox colorScheme="teal" fontWeight='bold'>{data.departure} - {data.arrival}</Checkbox>
                                    <p className="text-sm pl-7 pb-4">{data.name}</p>
                                </div>
                                <div>
                                    <Checkbox colorScheme="teal" fontWeight='bold'>{data.departure} - {data.arrival}</Checkbox>
                                    <p className="text-sm pl-7">{data.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="ml-10" />
                    <div className="flex gap-4 items-center mt-4">
                        <Button
                            border='1px'
                            borderColor='teal'
                            bg='white'
                            onClick={() => handleFavouriteClick(data.id)}
                        >
                            <Heart fill="red" color="red" />
                        </Button>
                        <Button w='100%' bg='#8DD3BB' onClick={() => navigate(`/flights/listing/${data.id}`)}>View Deals</Button>
                    </div>
                </div>
            ))}
        </div>
    )
}