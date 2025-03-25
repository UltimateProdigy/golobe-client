import { ReactNode } from "react";
import { FlightComponent, HotelComponent } from "../../features/home/tripForms";
import { useLocation } from "react-router-dom";
import { routes } from "../../lib/constants/routes";
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark } from "@chakra-ui/react";


interface IFilter {
    children: ReactNode
}
export default function Filter({ children }: IFilter) {
    const location = useLocation();
    return (
        <div className="bg-[#f7f8f8] h-[100vh]">
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

            <div className="flex mx-12 gap-[100px] mt-6">
                <div>
                    <p className="font-bold text-xl pb-4">Filters</p>
                    <p>Price</p>
                    <Slider w='200px' colorScheme="teal" defaultValue={40} mb={8}>
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
                    <hr />
                    <p className="pt-4">Departure Time</p>
                    <Slider w='200px' colorScheme="teal" defaultValue={40}>
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
                </div>
                <div>{children}</div>
            </div>
        </div>
    )
}