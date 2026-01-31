import { Box, Button, Grid, HStack, Text } from "@chakra-ui/react";
import { Iflight } from "../../lib/types";
import {
  AlarmCheck,
  Clock,
  DollarSign,
  GitCommitVertical,
  Heart,
  Share2,
  Star,
} from "lucide-react";
import useFavouritesStore from "../../store/favourites";
import { useCustomToast } from "../../hooks/useToast";
import emirateImg from "../../assets/emirates_bg.png";

interface IFlightDetails {
  flightDetails: Iflight;
}

export default function FlightDetailsComponent({
  flightDetails,
}: IFlightDetails) {
  const { isFavourite, removeFavourite, addFavourite } = useFavouritesStore();
  const showToast = useCustomToast();

  const handleFavouriteClick = (flight: Iflight) => {
    const favouriteItem = {
      id: flight.id,
      name: flight.name,
      type: "flight" as const,
      img: flight.img,
      departure: flight.departure.time,
      arrival: flight.arrival.time,
      duration: flight.duration,
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

  return (
    <div className="px-16 pt-6">
      <p className="font-bold text-3xl">{flightDetails.name}</p>
      <img className="mt-4 rounded-2xl w-[100vw]" src={emirateImg} alt="" />
      <div>
        <div className="w-full mt-8">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Box
                borderRadius={5}
                px={2}
                py={1}
                border="1px"
                bg="white"
                borderColor="teal"
              >
                {flightDetails.ratings}
              </Box>
              <p className="font-semibold">{flightDetails.remark}</p>
              <p className="text-sm">{flightDetails.reviews} reviews</p>
            </div>
            <div>
              <p className="font-bold text-[#FF8682] text-4xl flex justify-end">
                ${flightDetails.cost}
              </p>
              <div className="flex gap-2 items-center mt-4">
                <Button
                  border="1px"
                  borderColor="teal"
                  bg="white"
                  onClick={() => handleFavouriteClick(flightDetails)}
                >
                  <Heart
                    fill={isFavourite(flightDetails.id) ? "red" : "white"}
                    color={isFavourite(flightDetails.id) ? "red" : "red"}
                  />
                </Button>
                <Button border="1px" borderColor="teal" bg="white">
                  <Share2 size={30} />
                </Button>
                <Button w="100%" bg="#8DD3BB">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#8DD3BB] p-4 rounded-xl mt-4">
          <p className="font-bold text-xl">{flightDetails?.name} Policies</p>
          <div className="flex justify-between pt-4">
            <p className="flex gap-2">
              <AlarmCheck /> Pre-flight cleaning, installation of cabin HEPA
              filters
            </p>
            <p className="flex gap-2">
              <AlarmCheck /> Pre-flight health screening questions
            </p>
          </div>
        </div>
        <Grid gap={4} mt={8} templateColumns="repeat(5, 1fr)">
          <Box
            w="full"
            p={4}
            borderRadius="lg"
            bg="white"
            boxShadow="sm"
            borderColor="gray.200"
            borderWidth={1}
          >
            <HStack spacing={4}>
              <Clock color="#FF8682" size={20} />
              <Text fontSize="lg" fontWeight="bold">
                <strong>Departure:</strong> {flightDetails.departure?.time}
              </Text>
            </HStack>
          </Box>

          <Box
            w="full"
            p={4}
            borderRadius="lg"
            bg="white"
            boxShadow="sm"
            borderColor="gray.200"
            borderWidth={1}
          >
            <HStack spacing={4}>
              <Clock color="#FF8682" size={20} />
              <Text fontSize="lg" fontWeight="bold">
                <strong>Arrival:</strong> {flightDetails.arrival?.time}
              </Text>
            </HStack>
          </Box>

          <Box
            w="full"
            p={4}
            borderRadius="lg"
            bg="white"
            boxShadow="sm"
            borderColor="gray.200"
            borderWidth={1}
          >
            <HStack spacing={4}>
              <Clock color="#FF8682" size={20} />
              <Text fontSize="lg" fontWeight="bold">
                <strong>Duration:</strong> {flightDetails?.duration}
              </Text>
            </HStack>
          </Box>

          <Box
            w="full"
            p={4}
            borderRadius="lg"
            bg="white"
            boxShadow="sm"
            borderColor="gray.200"
            borderWidth={1}
          >
            <HStack spacing={4}>
              <DollarSign color="#FF8682" size={20} />
              <Text fontSize="lg" fontWeight="bold">
                <strong>Cost:</strong> ${flightDetails?.cost}
              </Text>
            </HStack>
          </Box>

          <Box
            w="full"
            p={4}
            borderRadius="lg"
            bg="white"
            boxShadow="sm"
            borderColor="gray.200"
            borderWidth={1}
          >
            <HStack spacing={4}>
              <Star color="#FF8682" size={20} />
              <Text fontSize="lg" fontWeight="bold">
                <strong>Ratings:</strong> {flightDetails?.ratings} / 5
              </Text>
            </HStack>
          </Box>

          <Box
            w="full"
            p={4}
            borderRadius="lg"
            bg="white"
            boxShadow="sm"
            borderColor="gray.200"
            borderWidth={1}
          >
            <HStack spacing={4}>
              <Star color="#FF8682" size={20} />
              <Text fontSize="lg" fontWeight="bold">
                <strong>Reviews:</strong> {flightDetails?.reviews} reviews
              </Text>
            </HStack>
          </Box>

          <Box
            w="full"
            p={4}
            borderRadius="lg"
            bg="white"
            boxShadow="sm"
            borderColor="gray.200"
            borderWidth={1}
          >
            <HStack spacing={4}>
              <GitCommitVertical color="#FF8682" size={30} />
              <Text fontSize="lg" fontWeight="bold">
                <strong>Remark:</strong> {flightDetails?.remark}
              </Text>
            </HStack>
          </Box>
        </Grid>
      </div>
    </div>
  );
}
