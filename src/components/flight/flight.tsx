import React, { useState, useEffect } from 'react';
import {
	Globe,
	Building2,
	PlaneLanding,
	PlaneTakeoff,
	Users2Icon,
	Plus,
	Send,
	Search
} from "lucide-react";
import { Select, Input, AutoComplete } from "antd";
import { Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../lib/constants/routes";
import { CityOption, TripOption } from '../../lib/types';
import { citiesWithIataCodes } from '../../features/home/data';
import { useCustomToast } from '../../hooks/useToast';

const items: TripOption[] = [
	{ key: "1", label: "Round Trip" },
	{ key: "2", label: "One Way" },
	{ key: "3", label: "Multi-City" },
	{ key: "4", label: "Flexible" },
];

const FlightComponent: React.FC = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const showToast = useCustomToast()
	const [origin, setOrigin] = useState<string>('');
	const [destination, setDestination] = useState<string>('');
	const [departureDate, setDepartureDate] = useState<string>('');
	const [passengers, setPassengers] = useState<number>(0);
	const [cityOptions, setCityOptions] = useState<CityOption[]>([]);

	const handleGetFlights = () => {
		if (!origin || !destination || !departureDate || !passengers) {
			showToast({ title: "Please enter all fields", status: 'error' });
			return;
		}
		if (origin === destination) {
			showToast({ title: "Origin and Destination cannot be the same", status: "error" });
			return
		}
		navigate(routes.flights.listing, { state: { origin, destination, departureDate, passengers } });
	};

	useEffect(() => {
		const options = citiesWithIataCodes.map(city => ({
			value: city.iataCode,
			label: `${city.name} (${city.iataCode})`
		}));
		setCityOptions(options);
	}, []);

	const handleSearch = (query: string, options: CityOption[]): CityOption[] => {
		return query
			? options.filter(option =>
				option.label.toLowerCase().includes(query.toLowerCase())
			)
			: options;
	};

	return (
		<div>
			<div className="mt-4 flex gap-4">
				<AutoComplete
					size="large"
					style={{ width: 800 }}
					options={cityOptions}
					onSearch={(query) => setCityOptions(handleSearch(query, cityOptions))}
					onSelect={(value: string) => setOrigin(value)}
					onChange={(value) => setOrigin(value)}
					value={origin}
					placeholder="From"
					notFoundContent="No cities found"
				>
					<Input
						size='large'
						variant="filled"
						addonAfter={<Building2 />}
					/>
				</AutoComplete>
				<AutoComplete
					size="large"
					style={{ width: 800 }}
					options={cityOptions}
					onSearch={(query) => setCityOptions(handleSearch(query, cityOptions))}
					onSelect={(value: string) => setDestination(value)}
					onChange={(value) => setDestination(value)}
					value={destination}
					placeholder="To"
					notFoundContent="No cities found"
				>
					<Input
						size='large'
						variant="filled"
						addonAfter={<Globe />}
					/>
				</AutoComplete>
				<Select
					placeholder="Trip"
					className="bg"
					style={{ width: 120, height: 38 }}
					options={items}
				/>
				<Input
					size="large"
					variant="filled"
					type="date"
					placeholder="Depart"
					addonAfter={<PlaneTakeoff />}
					value={departureDate}
					onChange={(e) => setDepartureDate(e.target.value)}
				/>
				<Input
					size="large"
					variant="filled"
					type="date"
					placeholder="Return"
					addonAfter={<PlaneLanding />}
				/>
				<Input
					size="large"
					variant="filled"
					type="number"
					placeholder="Passenger(s)"
					addonAfter={<Users2Icon />}
					value={passengers}
					onChange={(e) => setPassengers(Number(e.target.value))}
				/>
			</div>
			{location.pathname === routes.flights.listing ? (
				<div className="flex justify-end mt-4">
					<Button bg="#8DD3BB" onClick={handleGetFlights}><Search /></Button>
				</div>
			) : (
				<div className="flex items-center gap-4 mt-6 justify-end">
					<button className="flex px-4 py-2 gap-2 rounded cursor-pointer">
						<Plus />
						Add Promo Code
					</button>
					<Button display="flex" gap={2} bg="#8DD3BB" onClick={handleGetFlights}>
						<Send />
						Show Flights
					</Button>
				</div>
			)}
		</div>
	);
};

export default FlightComponent;