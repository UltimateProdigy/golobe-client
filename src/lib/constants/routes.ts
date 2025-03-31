export const routes = {
	index: "/",
	auth: {
		register: "/auth/register",
		login: "/auth/login",
		forgot_password: "/auth/forgot-password"
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
