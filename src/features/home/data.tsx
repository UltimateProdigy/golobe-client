import { PlaneIcon, BedDoubleIcon } from "lucide-react";
import FlightComponent from "../../components/flight/flight";
import { routes } from "../../lib/constants/routes";
import HotelComponent from "../../components/hotel/hotel";

export const links = [
	{
		id: 1,
		name: "Find Flight",
		icon: PlaneIcon,
		component: <FlightComponent />,
	},
	{
		id: 2,
		name: "Find Stays",
		icon: BedDoubleIcon,
		component: <HotelComponent />,
	},
];

export const locations = [
	{ id: 1, country: "Turkey", city: "Istanbul" },
	{ id: 2, country: "Australia", city: "Sydney" },
	{ id: 3, country: "Azerbaijan", city: "Baku" },
	{ id: 4, country: "Maldives", city: "Male" },
	{ id: 5, country: "France", city: "Paris" },
	{ id: 6, country: "US", city: "New York" },
	{ id: 7, country: "UK", city: "London" },
	{ id: 8, country: "Japan", city: "Tokyo" },
	{ id: 9, country: "UAE", city: "Dubai" },
];

export const banners = [
	{
		id: 1,
		name: "Flights",
		bg: "bg-[url(/src/assets/f-banner.png)]",
		desc: "Search Flights & Places Hire to our most popular destinations",
		cta: "Show Flights",
		route: routes.flights.listing
	},
	{
		id: 2,
		name: "Hotels",
		bg: "bg-[url(/src/assets/h-banner.png)]",
		desc: "Search Hotels & Places Hire to our most popular destinations",
		cta: "Show Hotels",
		route: routes.hotels.listing
	},
];

export const citiesWithIataCodes = [
	{ id: 1, name: "New York", iataCode: "NYC", cityCode: "NYC" },
	{ id: 2, name: "London", iataCode: "LON", cityCode: "LON" },
	{ id: 3, name: "Tokyo", iataCode: "TYO", cityCode: "TYO" },
	{ id: 4, name: "Paris", iataCode: "PAR", cityCode: "PAR" },
	{ id: 5, name: "Dubai", iataCode: "DXB", cityCode: "DXB" },
	{ id: 6, name: "Singapore", iataCode: "SIN", cityCode: "SIN" },
	{ id: 7, name: "Los Angeles", iataCode: "LAX", cityCode: "LAX" },
	{ id: 8, name: "Chicago", iataCode: "ORD", cityCode: "CHI" },
	{ id: 9, name: "Hong Kong", iataCode: "HKG", cityCode: "HKG" },
	{ id: 10, name: "Barcelona", iataCode: "BCN", cityCode: "BCN" },
	{ id: 11, name: "Madrid", iataCode: "MAD", cityCode: "MAD" },
	{ id: 12, name: "Berlin", iataCode: "BER", cityCode: "BER" },
	{ id: 13, name: "Rome", iataCode: "FCO", cityCode: "ROM" },
	{ id: 14, name: "Sydney", iataCode: "SYD", cityCode: "SYD" },
	{ id: 15, name: "Toronto", iataCode: "YYZ", cityCode: "YTO" },
	{ id: 16, name: "Lagos", iataCode: "LOS", cityCode: "LOS" },
];