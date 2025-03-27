import { Box, Button } from "@chakra-ui/react"
import Filter from "../../../components/filter"
import Footer from "../../../components/footer"
import { listings } from "../data"
import { Heart, MapPin, Bath } from "lucide-react"
import { useCustomToast } from "../../../hooks/useToast"

export default function HotelListing() {
    const showToast = useCustomToast();
    return (
        <div className="bg-[#f7f8f8] h-[100%]">
            <Filter>
                {listings.map((data) => (
                    <div className="bg-white rounded-2xl p-6 m-4 shadow-md">
                        <div className="w-[60vw] flex gap-10 mb-6">
                            <img
                                src={data.img}
                                alt={data.name}
                                className="rounded-xl w-[200px]"
                            />
                            <div className="w-full">
                                <div className="flex justify-between">
                                    <p className="font-bold text-3xl pb-2">{data.name}</p>
                                    <div>
                                        <p className="text-sm text-gray-500">Starting from</p>
                                        <p className="font-bold text-[#FF8682] text-2xl">${data.cost}/<span className="text-sm">night</span></p>
                                    </div>
                                </div>
                                <div className="mt-1">
                                    <div className="flex gap-2 mb-2 mt-2">
                                        <MapPin />
                                        <p>{data.address}</p>
                                    </div>
                                    <div className="flex gap-6">
                                        <Box display="flex" alignItems="center" >
                                            {Array.from(
                                                { length: data.ratings },
                                                (_, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-[#FF8682]"
                                                    >
                                                        ★
                                                    </span>
                                                )
                                            )}
                                            <p className="pl-2">{data.ratings} star hotel</p>
                                        </Box>
                                        <div className="flex gap-2">
                                            <Bath />
                                            <p>{data.amenities}+ Amenities</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 mt-2">
                                        <Box borderRadius={5} px={2} py={1} border='1px' bg='white' borderColor='teal'>
                                            {data.ratings}
                                        </Box>
                                        <p className="font-semibold">{data.remark}</p>
                                        <p className="text-sm">{data.reviews} reviews</p>
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
                                onClick={() => showToast({ title: "Added To Favourites", status: "success" })}
                            >
                                <Heart />
                            </Button>
                            <Button w='100%' bg='#8DD3BB'>View Place</Button>
                        </div>
                    </div>
                ))}
            </Filter>
            <Footer />
        </div>
    )
}