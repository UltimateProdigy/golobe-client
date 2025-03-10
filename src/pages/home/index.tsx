import Footer from "../../components/footer";
import Hero from "../../features/home/hero";
import Locations from "../../features/home/locations";
import Reviews from "../../features/home/reviews";

export default function Home() {
	return (
		<div>
			<Hero />
            <Locations />
            <Reviews />
            <Footer />
		</div>
	);
}
