import { lazy, Suspense } from "react";
import { routes } from "../lib/constants/routes";
import { Route } from "react-router-dom";
import Loader from "../components/loader";
import { RouteConfig } from "../lib/types";
import { ProtectedRoute } from "../components/protectedRoutes";

const Home = lazy(() => import("../pages/home/index"));
const Login = lazy(() => import("../pages/auth/login/index"));
const Register = lazy(() => import("../pages/auth/register/index"));
const Hotels = lazy(() => import("../pages/hotels/index"));
const HotelDetails = lazy(() => import("../pages/hotels/[id]"));
const HotelListing = lazy(() => import("../pages/hotels/listing/index"));
const Flights = lazy(() => import("../pages/flights/index"));
const FlightDetails = lazy(() => import("../pages/flights/[id]"));
const FlightListing = lazy(() => import("../pages/flights/listing/index"))

const golobe: RouteConfig[] = [
	{
		path: routes.index,
		element: <Home />,
	},
	{
		path: routes.auth.login,
		element: <Login />,
	},
	{
		path: routes.auth.register,
		element: <Register />,
	},
	{
		path: routes.hotels.index,
		element: <Hotels />,
		protected: true
	},
	{
		path: routes.hotels.details,
		element: <HotelDetails />,
		protected: true
	},
	{
		path: routes.hotels.listing,
		element: <HotelListing />,
		protected: true
	},
	{
		path: routes.flights.index,
		element: <Flights />,
		protected: true
	},
	{
		path: routes.flights.details,
		element: <FlightDetails />,
		protected: true
	},
	{
		path: routes.flights.listing,
		element: <FlightListing />,
		protected: true
	},
];

function golobeRoutes() {
	return (
		<>
			{golobe.map((route) => (
				<Route
					key={route.path}
					path={route.path}
					element={
						<Suspense fallback={<Loader />}>
							{route.protected ? (
								<ProtectedRoute>{route.element}</ProtectedRoute>
							) : (
								route.element
							)}
						</Suspense>
					}
				/>
			))}
		</>
	);
}

export default golobeRoutes;
