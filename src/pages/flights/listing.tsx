import { Box, Button, Checkbox } from "@chakra-ui/react"
import Filter from "../../components/filter"
import Footer from "../../components/footer"
import { listings } from "./data"
import { Heart } from "lucide-react"

export default function FlightListing() {
    return (
        <div className="bg-[#f7f8f8] h-[100%]">
            <Filter>
                {listings.map((data) => (
                    <div className="bg-white rounded-2xl p-6 m-4 shadow-md">
                        <div className="w-[60vw] flex gap-10 mb-6">
                            <img
                                src={data.img}
                                alt={data.name}
                            />
                            <div className="w-full">
                                <div className="flex justify-between">
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
                                        <Checkbox colorScheme="teal" fontWeight='bold'>12:00 pm - 01:28 pm</Checkbox>
                                        <p className="text-sm pl-7 pb-4">{data.name}</p>
                                    </div>
                                    <div>
                                        <Checkbox colorScheme="teal" fontWeight='bold'>12:00 pm - 01:28 pm</Checkbox>
                                        <p className="text-sm pl-7">{data.name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="ml-10" />
                        <div className="flex gap-4 items-center mt-4">
                            <Button border='1px' borderColor='teal' bg='white'><Heart /></Button>
                            <Button w='100%' bg='#8DD3BB'>View Deals</Button>
                        </div>
                    </div>
                ))}
            </Filter>
            <Footer />
        </div>
    )
}