import {
	Globe,
	Building2,
	PlaneLanding,
	PlaneTakeoff,
	Users2Icon,
	Plus,
	Send,
	Calendar,
	Search
} from "lucide-react";
import { Select, Input } from "antd";
import { Button } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { routes } from "../../lib/constants/routes";

const items = [
	{
		key: "1",
		label: "Return",
	},
	{
		key: "2",
		label: "Item 2",
	},
	{
		key: "3",
		label: "Item 3",
	},
];

export const FlightComponent = () => {
	const location = useLocation();
	return (
		<div>
			<div className="mt-4 flex gap-4">
				<Input
					size="large"
					variant="filled"
					placeholder="From"
					addonAfter={<Building2 />}
				/>
				<Input
					size="large"
					variant="filled"
					placeholder="To"
					addonAfter={<Globe />}
				/>
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
				/>
			</div>
			{location.pathname === routes.flights.listing ? (
				<div className="flex justify-end mt-4">
					<Button bg="#8DD3BB"><Search /></Button>
				</div>
			) : (
				<div className="flex items-center gap-4 mt-6 justify-end">
					<button className="flex px-4 py-2 gap-2 rounded cursor-pointer">
						<Plus />
						Add Promo Code
					</button>
					<Button display="flex" gap={2} bg="#8DD3BB">
						<Send />
						Show Flights
					</Button>
				</div>
			)}
		</div>
	);
};

export const HotelComponent = () => {
	const location = useLocation();
	return (
		<div>
			<div className="mt-4 flex gap-4">
				<Input
					size="large"
					variant="filled"
					placeholder="Destination"
					addonAfter={<Building2 />}
				/>
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
					<Button bg="#8DD3BB"><Search /></Button>
				</div>
			) : (
				<div className="flex items-center gap-4 mt-6 justify-end cursor-pointer">
					<button className="flex px-4 py-2 rounded gap-2">
						<Plus />
						Add Promo Code
					</button>
					<Button display="flex" gap={2} bg="#8DD3BB">
						<Send />
						Show Stays
					</Button>
				</div>
			)}
		</div>
	);
};
