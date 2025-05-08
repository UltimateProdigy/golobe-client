import React, { useState, useEffect } from 'react';
import {

    Building2,
    Users2Icon,
    Plus,
    Send,
    Calendar,
    Search
} from "lucide-react";
import { Input, AutoComplete } from "antd";
import { Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../lib/constants/routes";
import { CityOption } from '../../lib/types';
import { citiesWithIataCodes } from '../../features/home/data';
import { useCustomToast } from '../../hooks/useToast';

const HotelComponent: React.FC = () => {
    const location = useLocation();
    const showToast = useCustomToast();
    const navigate = useNavigate();
    const [cityOptions, setCityOptions] = useState<CityOption[]>([]);
    const [destination, setDestination] = useState<string>('');

    useEffect(() => {
        const options = citiesWithIataCodes.map(city => ({
            value: city.cityCode,
            label: `${city.name} (${city.iataCode})`
        }));
        setCityOptions(options);
    }, [citiesWithIataCodes]);

    const handleSearch = (query: string, options: CityOption[]): CityOption[] => {
        return query
            ? options.filter(option =>
                option.label.toLowerCase().includes(query.toLowerCase())
            )
            : options;
    };


    const handleGetHotels = () => {
        if (!destination) {
            showToast({ title: "Please enter a destination", status: 'error' });
            return;
        }

        navigate(routes.hotels.listing, {
            state: {
                destination,

            }
        });
    };

    return (
        <div>
            <div className="mt-4 flex gap-4">
                <AutoComplete
                    size="large"
                    style={{ width: 800 }}
                    options={cityOptions}
                    onSearch={(query) => setCityOptions(handleSearch(query, cityOptions))}
                    onSelect={(value: string) => setDestination(value)}
                    onChange={(value) => setDestination(value)}
                    value={destination}
                    placeholder="Destination"
                    notFoundContent="No cities found"
                >
                    <Input
                        size='large'
                        variant="filled"
                        addonAfter={<Building2 />}
                    />
                </AutoComplete>
                <Input
                    size="large"
                    variant="filled"
                    type="date"
                    placeholder="Check In"
                    addonAfter={<Calendar />}
                />
                <Input
                    size="large"
                    variant="filled"
                    type="date"
                    placeholder="Checkout"
                    addonAfter={<Calendar />}
                />
                <Input
                    size="large"
                    variant="filled"
                    type="number"
                    placeholder="Guest(s)"
                    addonAfter={<Users2Icon />}
                />
            </div>
            {location.pathname === routes.hotels.listing ? (
                <div className="flex justify-end mt-4">
                    <Button bg="#8DD3BB" onClick={handleGetHotels}><Search /></Button>
                </div>
            ) : (
                <div className="flex items-center gap-4 mt-6 justify-end cursor-pointer">
                    <button className="flex px-4 py-2 rounded gap-2">
                        <Plus />
                        Add Promo Code
                    </button>
                    <Button display="flex" gap={2} bg="#8DD3BB" onClick={handleGetHotels}>
                        <Send />
                        Show Stays
                    </Button>
                </div>
            )}
        </div>
    );
};

export default HotelComponent