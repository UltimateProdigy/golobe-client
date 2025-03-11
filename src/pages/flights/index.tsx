import Footer from "../../components/footer";
import Book from "../../features/flights/book";
import Discover from "../../features/flights/discover";
import FlightHero from "../../features/flights/hero";

export default function Flights() {
	return (
		<div>
			<FlightHero />
            <Discover />
            <Book />
            <Footer />
		</div>
	);
}
