import { ReactNode } from "react";
import { FlightComponent, HotelComponent } from "../../features/home/tripForms";
import { useLocation } from "react-router-dom";
import { routes } from "../../lib/constants/routes";
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark, Button, Accordion, AccordionButton, Box, AccordionIcon, AccordionItem, AccordionPanel, Checkbox, Divider } from "@chakra-ui/react";
import { airlines, amenities, freebies, review, trips } from "./data";

interface IFilter {
    children: ReactNode
}
export default function Filter({ children }: IFilter) {
    const location = useLocation();

    return (
        <div>
            <div className="pt-6">
                {location.pathname === routes.flights.listing ?
                    (
                        <div className="mx-12 pt-4 p-4 rounded-xl border shadow-lg bg-white">
                            <FlightComponent />
                        </div>
                    ) : (
                        <div className="mx-12 pt-4 p-4 rounded-xl border shadow-lg bg-white">
                            <HotelComponent />
                        </div>
                    )
                }
            </div>
            <div className="flex mx-12 gap-[40px] mt-8">
                <div className="w-80">
                    <p className="font-bold text-xl pb-4">Filters</p>
                    <Accordion defaultIndex={[0]} allowMultiple>
                        <AccordionItem>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left' ml={-4}>
                                    <p className="font-semibold">Price</p>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel>
                                <Slider w='280px' colorScheme="teal" defaultValue={40} mb={2} ml={-2}>
                                    <SliderMark value={0} mt='1' ml='-1.5' fontSize='sm' >
                                        $50
                                    </SliderMark>
                                    <SliderMark value={100} mt='1' ml='-1.5' fontSize='sm' >
                                        $1200
                                    </SliderMark>
                                    <SliderTrack>
                                        <SliderFilledTrack />
                                    </SliderTrack>
                                    <SliderThumb />
                                </Slider>
                            </AccordionPanel>
                        </AccordionItem>
                        <div>
                            {location.pathname === routes.flights.listing ? (
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left' ml={-4}>
                                            <p className="font-semibold pt-2">Departure Time</p>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel>
                                        <Slider w='280px' colorScheme="teal" defaultValue={40} mb={2} ml={-2}>
                                            <SliderMark value={0} mt='1' ml='-1.5' fontSize='sm' >
                                                12:01:AM
                                            </SliderMark>
                                            <SliderMark value={100} mt='1' ml='-1.5' fontSize='sm'>
                                                11:59:PM
                                            </SliderMark>
                                            <SliderTrack>
                                                <SliderFilledTrack />
                                            </SliderTrack>
                                            <SliderThumb />
                                        </Slider>
                                    </AccordionPanel>
                                </AccordionItem>
                            ) : (
                                <></>
                            )}
                        </div>
                        <AccordionItem>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left' ml={-4}>
                                    <p className="font-semibold">Rating</p>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel>
                                {review.map((data) => (
                                    <Button _active={{ bg: "green" }} w={10} border='1px' bg='white' borderColor='teal' mr={2} mt={2}>{data.value}</Button>
                                ))}
                            </AccordionPanel>
                        </AccordionItem>
                        <div>
                            {location.pathname === routes.flights.listing ? (
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left' ml={-4}>
                                            <p className="font-semibold">Airlines</p>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel>
                                        {airlines.map((airline) => (
                                            <div>
                                                <Checkbox value={airline.value} ml={-3} colorScheme="teal">{airline.value}</Checkbox>
                                            </div>
                                        ))}
                                    </AccordionPanel>
                                </AccordionItem>
                            ) : (
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left' ml={-4}>
                                            <p className="font-semibold">Freebies</p>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel>
                                        {freebies.map((freebie) => (
                                            <div>
                                                <Checkbox value={freebie.value} ml={-3} colorScheme="teal">{freebie.value}</Checkbox>
                                            </div>
                                        ))}
                                    </AccordionPanel>
                                </AccordionItem>
                            )}
                        </div>
                        <div>
                            {location.pathname === routes.flights.listing ? (
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left' ml={-4}>
                                            <p className="font-semibold">Trips</p>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel>
                                        {trips.map((trip) => (
                                            <div>
                                                <Checkbox value={trip.value} ml={-3} colorScheme="teal">{trip.value}</Checkbox>
                                            </div>
                                        ))}
                                    </AccordionPanel>
                                </AccordionItem>
                            ) : (
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left' ml={-4}>
                                            <p className="font-semibold">Amenities</p>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel>
                                        {amenities.map((amenity) => (
                                            <div>
                                                <Checkbox value={amenity.value} ml={-3} colorScheme="teal">{amenity.value}</Checkbox>
                                            </div>
                                        ))}
                                    </AccordionPanel>
                                </AccordionItem>
                            )}
                        </div>
                    </Accordion>
                </div>
                <Divider orientation='vertical' h="80vh" />
                <div>{children}</div>
            </div>
        </div>
    )
}