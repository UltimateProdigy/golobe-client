import { Box, Button } from "@chakra-ui/react";
import { Heart, MapPin, Bath } from "lucide-react";
import useFavouritesStore from "../../store/favourites";

export default function HotelFavourites() {
    const { favourites, removeFavourite } = useFavouritesStore();

    const handleFavouriteClick = (hotelId: number) => {
        removeFavourite(hotelId);
    };

    const hotelFavourites = favourites.filter(fav => fav.type === 'hotel');

    if (hotelFavourites.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-lg text-gray-500">No hotel favorites yet</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {hotelFavourites.map((data) => (
                <div key={data.id} className="bg-white rounded-2xl p-6 shadow-md mx-8">
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                        <img
                            src={data.img}
                            alt={data.name}
                            className="rounded-xl w-full md:w-[200px] h-[200px] object-cover"
                        />
                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row justify-between">
                                <p className="font-bold text-2xl md:text-3xl pb-2">{data.name}</p>
                                <div className="mt-2 md:mt-0">
                                    <p className="text-sm text-gray-500">Starting from</p>
                                    <p className="font-bold text-[#FF8682] text-2xl">
                                        ${data.cost}/<span className="text-sm">night</span>
                                    </p>
                                </div>
                            </div>
                            <div className="mt-1">
                                <div className="flex gap-2 mb-2 mt-2">
                                    <MapPin size={18} />
                                    <p>{data.address}</p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-6">
                                    <Box display="flex" alignItems="center">
                                        {Array.from(
                                            { length: Math.floor(data.ratings) },
                                            (_, i) => (
                                                <span key={i} className="text-[#FF8682]">
                                                    ★
                                                </span>
                                            )
                                        )}
                                        <p className="pl-2">{data.ratings} star hotel</p>
                                    </Box>
                                    <div className="flex gap-2">
                                        <Bath size={18} />
                                        <p>{data.amenities}+ Amenities</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-2 mt-2">
                                    <Box borderRadius={5} px={2} py={1} border='1px' bg='white' borderColor='teal'>
                                        {data.ratings}
                                    </Box>
                                    <p className="font-semibold">{data.remark}</p>
                                    <p className="text-sm">{data.reviews} reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-4" />
                    <div className="flex gap-4 items-center">
                        <Button
                            border='1px'
                            borderColor='teal'
                            bg='white'
                            onClick={() => handleFavouriteClick(data.id)}
                            aria-label="Remove from favorites"
                        >
                            <Heart
                                fill="red"
                                color="red"
                            />
                        </Button>
                        <Button flex={1} bg='#8DD3BB'>View Place</Button>
                    </div>
                </div>
            ))}
        </div>
    );
}