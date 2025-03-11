import { Button } from "@chakra-ui/react";
import { cities } from "./data";

export default function Book() {
	return (
		<div className="mt-20">
			<div className="flex justify-between items-center px-20 mb-10">
				<div>
					<p className="font-bold text-3xl">Fall into travel</p>
					<p className="pt-4 text-sm w-[500px]">
						Going somewhere to celebrate this season? Whether you
						are going home or somewhere to roam, we've got te travel
						tools to get you to your destinations
					</p>
				</div>
				<Button border="1px solid green" bg="transparent">
					See All
				</Button>
			</div>
			<div className="flex justify-between px-20">
				{cities.map((city) => (
					<div
						key={city.name}
						className="flex flex-col justify-end items-center bg-cover bg-center h-94 w-70 rounded-lg transition-transform transform hover:scale-105 relative"
						style={{ backgroundImage: `url(${city.img})` }}
					>
						<div className="p-4 w-full bg-opacity-50 rounded-b-lg">
							<div className="flex justify-between items-center">
								<div>
									<p className="font-bold text-2xl text-white">
										{city.name}
									</p>
									<p className="text-sm text-white pb-2">
										{city.desc}
									</p>
								</div>
								<p className="font-bold text-white text-2xl">$700</p>
							</div>
							<Button className="w-[100%]" bg="#8DD3BB">
								Book Flight
							</Button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
