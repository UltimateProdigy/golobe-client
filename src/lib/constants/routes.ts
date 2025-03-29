export const routes = {
	index: "/",
	auth: {
		register: "/auth/register",
		login: "/auth/login",
	},
	hotels: {
		index: "/hotels",
		details: "/hotels/:id",
		listing: "/hotels/listing"
	},
	flights: {
		index: "/flights",
		details: "/flights/:id",
		listing: "/flights/listing"
	},
	favourites: {
		index: "/favourites"
	}
};
