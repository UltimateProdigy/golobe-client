import Footer from "../../components/footer";
import HotelBook from "../../features/hotels/book";
import HotelHero from "../../features/hotels/hero";

export default function Hotels() {
	return (
		<div>
			<HotelHero />
            <HotelBook />
            <Footer />
		</div>
	);
}
