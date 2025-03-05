import {
	Globe,
	Building2,
	PlaneLanding,
	PlaneTakeoff,
	Users2Icon,
	Plus,
	Send,
} from "lucide-react";
import { Dropdown, Select, Input } from "antd";

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
			<div className="flex items-center gap-4 mt-6 justify-end">
				<button className="flex px-4 py-2 gap-2 rounded cursor-pointer">
					<Plus />
					Add Promo Code
				</button>
				<button className="flex px-4 py-2 bg-[#8DD3BB] gap-2 rounded cursor-pointer">
					<Send />
					Show Flights
				</button>
			</div>
		</div>
	);
};

export const HotelComponent = () => {
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
			<div className="flex items-center gap-4 mt-6 justify-end cursor-pointer">
				<button className="flex px-4 py-2 rounded gap-2">
					<Plus />
					Add Promo Code
				</button>
				<button className="flex px-4 py-2 bg-[#8DD3BB] gap-2 rounded cursor-pointer">
					<Send />
					Show Hotels
				</button>
			</div>
		</div>
	);
};
