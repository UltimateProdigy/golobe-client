import { Box, Button } from "@chakra-ui/react";
import Filter from "../../../components/filter";
import Footer from "../../../components/footer";
import { Heart, MapPin, Bath } from "lucide-react";
import { useCustomToast } from "../../../hooks/useToast";
import useFavouritesStore from "../../../store/favourites";
import { useLocation } from "react-router-dom";
import api from "../../../api";
import { useEffect, useState } from "react";
import { getRandomListing } from "../../../lib/utils";
import Pagination from "../../../components/pagination";
import Loader from "../../../components/loader";
import EmptyState from "../../../components/empty-state";
import { AxiosError } from "axios";
import { listings } from "../data";

export interface IHotel {
  _id: string;
  name: string;
  ratings: number;
  remark: string;
  reviews: number;
  cost: number;
  amenities: number;
  img: string;
  address: string;
}
interface ErrorResponse {
  error?: { title: string }[];
}

export default function HotelListing() {
  const { addFavourite, removeFavourite, isFavourite } = useFavouritesStore();
  const showToast = useCustomToast();
  const location = useLocation();
  const [data, setData] = useState<IHotel[]>([]);
  const [city, setCity] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 4;

  useEffect(() => {
    const { destination } = location.state || {};
    if (destination && destination !== city) {
      setCity(destination);
    }
  }, [location.state]);

  const getHotels = async () => {
    if (!city) {
      setError("Please select a city");
      setIsLoading(false);
      showToast({ title: "Please select a city", status: "error" });
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      const res = await api.get("/api/hotels", {
        params: { city },
      });

      const mappedData: IHotel[] = res.data.map(
        (hotel: { _id: string; name: string }) => {
          return {
            ...getRandomListing({ listings }),
            _id: hotel._id,
            name: hotel.name,
          };
        },
      );

      setData(mappedData);
      setCurrentPage(1);
    } catch (err) {
      console.log("err", err);
      const axiosError = err as AxiosError<ErrorResponse>;
      let errorMessage = "Failed to load hotels";
      if (axiosError.response && axiosError.response.data?.error?.length) {
        errorMessage = axiosError.response.data.error[0].title;
      } else if (axiosError.response) {
        errorMessage = `Server error: ${axiosError.response.status}`;
      } else if (axiosError.request) {
        errorMessage = "Network error: Unable to reach the server";
      }
      setError(errorMessage);
      setData([]);
      showToast({ title: errorMessage, status: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (city) {
      getHotels();
    }
  }, [city]);

  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = data.slice(indexOfFirstHotel, indexOfLastHotel);

  const handleFavouriteClick = (hotel: IHotel) => {
    const favouriteItem = {
      id: hotel._id,
      name: hotel.name,
      type: "hotel" as const,
      img: hotel.img,
      ratings: hotel.ratings,
      remark: hotel.remark,
      reviews: hotel.reviews,
      cost: hotel.cost,
      amenities: hotel.amenities,
      address: hotel.address,
    };

    if (isFavourite(hotel._id)) {
      removeFavourite(hotel._id);
      showToast({ title: "Removed from Favourites", status: "info" });
    } else {
      addFavourite(favouriteItem);
      showToast({ title: "Added to Favourites", status: "success" });
    }
  };

  if (isLoading) return <Loader />;

  if (error) return <EmptyState message={error} />;

  if (!data.length)
    return <EmptyState message="No hotels found for your search." />;

  return (
    <div className="bg-[#f7f8f8] min-h-screen">
      <Filter>
        {currentHotels.map((hotel: IHotel) => (
          <div
            key={hotel._id}
            className="bg-white rounded-2xl p-6 m-4 shadow-md"
          >
            <div className="w-[60vw] flex gap-10 mb-6">
              <img
                src={hotel.img}
                alt={hotel.name}
                className="rounded-xl w-[200px] h-[200px] object-cover"
              />
              <div className="w-full">
                <div className="flex justify-between">
                  <p className="font-bold text-3xl pb-2">{hotel.name}</p>
                  <div>
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="font-bold text-[#FF8682] text-2xl">
                      €{hotel.cost}/<span className="text-sm">night</span>
                    </p>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="flex gap-2 mb-2 mt-2">
                    <MapPin />
                    <p>{hotel.address}</p>
                  </div>
                  <div className="flex gap-6">
                    <Box display="flex" alignItems="center">
                      {Array.from(
                        { length: Math.floor(hotel.ratings) },
                        (_, i) => (
                          <span key={i} className="text-[#FF8682]">
                            ★
                          </span>
                        ),
                      )}
                      <p className="pl-2">{hotel.ratings} star hotel</p>
                    </Box>
                    <div className="flex gap-2">
                      <Bath />
                      <p>{hotel.amenities}+ Amenities</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Box
                      borderRadius={5}
                      px={2}
                      py={1}
                      border="1px"
                      bg="white"
                      borderColor="teal"
                    >
                      {hotel.ratings}
                    </Box>
                    <p className="font-semibold">{hotel.remark}</p>
                    <p className="text-sm">{hotel.reviews} reviews</p>
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
                onClick={() => handleFavouriteClick(hotel)}
                aria-label={
                  isFavourite(hotel._id)
                    ? "Remove from favourites"
                    : "Add to favourites"
                }
              >
                <Heart
                  fill={isFavourite(hotel._id) ? "red" : "white"}
                  color={isFavourite(hotel._id) ? "red" : "red"}
                />
              </Button>
              <Button w="100%" bg="#8DD3BB">
                Book Now
              </Button>
            </div>
          </div>
        ))}
        <Pagination
          currentPage={currentPage}
          totalItems={data.length}
          itemsPerPage={hotelsPerPage}
          onPageChange={setCurrentPage}
        />
      </Filter>
      <Footer />
    </div>
  );
}
