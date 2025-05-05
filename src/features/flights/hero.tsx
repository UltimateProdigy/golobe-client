import FlightComponent from "../../components/flight/flight";

const FlightHero = () => {
	return (
		<div className="relative">
			<div className="bg-[url(/src/assets/find_flight.png)] bg-cover h-[80vh] flex flex-col text-white p-17">
				<p className="text-[50px] font-bold w-[400px] leading-15">
					Make your travel wishlist, we'll do the rest
				</p>
				<p className="text-lg pt-6">Special offers to suit your plan</p>
			</div>
			<div className="bg-white w-[70vw] rounded-2xl h-[35vh] absolute -bottom-30 left-1/2 transform -translate-x-1/2 shadow-lg p-6 py-8">
				<p className="font-bold">Where are you flying?</p>
				<FlightComponent />
			</div>
		</div>
	);
};

export default FlightHero;
