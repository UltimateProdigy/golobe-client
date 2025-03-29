import { PlaneIcon, BedDoubleIcon } from "lucide-react";
import { FlightComponent, HotelComponent } from "./tripForms";
import { routes } from "../../lib/constants/routes";

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
