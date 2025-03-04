import { BedDoubleIcon, PlaneIcon } from "lucide-react";
import { useState } from "react";

const FlightComponent = () => {
	return (
		<div className="mt-4">
			<p>Flight Component Content</p>
		</div>
	);
};

const HotelComponent = () => {
	return (
		<div className="mt-4">
			<p>Hotel Component Content</p>
		</div>
	);
};

const links = [
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

const Hero = () => {
	const [isActive, setIsActive] = useState<number>(1);

	const handleClick = (id: number) => {
		setIsActive(id);
	};

	const activeComponent = links.find(
		(link) => link.id === isActive
	)?.component;

	return (
		<div className="relative">
			<div className="bg-[url(/src/assets/hero-bg.png)] bg-cover h-[80vh] flex flex-col justify-center items-center text-center text-white">
				<p className="text-4xl font-bold">Helping Others</p>
				<p className="text-[90px] font-bold mt-4">LIVE & TRAVEL</p>
				<p className="text-lg mt-2">Special offers to suit your plan</p>
			</div>

			<div className="bg-white w-[70vw] rounded-2xl h-[30vh] absolute -bottom-30 left-1/2 transform -translate-x-1/2 shadow-lg p-4">
				<div className="flex gap-6 mt-2">
					{links.map((link) => (
						<div
							key={link.id}
							className={`flex gap-2 cursor-pointer pb-3 ${
								isActive === link.id
									? "border-b-4 border-teal-400"
									: ""
							}`}
							onClick={() => handleClick(link.id)}
						>
							<div>
								<link.icon fill="black" />
							</div>
							<p>{link.name}</p>
						</div>
					))}
				</div>

				<div className="mt-4">{activeComponent}</div>
			</div>
		</div>
	);
};

export default Hero;
