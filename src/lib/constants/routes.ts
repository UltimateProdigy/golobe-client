export const routes = {
    index: "/",
    auth: {
        register: "/auth/register",
        login: "/auth/login",
        forgot_password: "/auth/forgot-password",
    },
    hotels: {
        index: "/hotels",
        details: "/hotels/:id",
        listing: "/hotels/listing",
        listing_details: "/hotels/listing/:id",
    },
    flights: {
        index: "/flights",
        details: "/flights/:id",
        listing: "/flights/listing",
        listing_details: "/flights/listing/:id",
    },
    favourites: {
        index: "/favourites",
    },
    profile: {
        index: "/profile",
    },
};
