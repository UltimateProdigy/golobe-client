import { lazy, Suspense } from "react";
import { routes } from "../lib/constants/routes";
import { Route } from "react-router-dom";
import Loader from "../components/loader";

const Home = lazy(() => import("../pages/home/index"));
const Login = lazy(() => import("../pages/auth/login/index"));
const Register = lazy(() => import("../pages/auth/register/index"));
const Hotels = lazy(() => import("../pages/hotels/index"));
const HotelDetails = lazy(() => import("../pages/hotels/[id]"));
const Flights = lazy(() => import("../pages/flights/index"));
const FlightDetails = lazy(() => import("../pages/flights/[id]"));

const golobe = [
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
	},
	{
		path: routes.hotels.details,
		element: <HotelDetails />,
	},
	{
		path: routes.flights.index,
		element: <Flights />,
	},
	{
		path: routes.flights.details,
		element: <FlightDetails />,
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
							{route.element}
						</Suspense>
					}
				/>
			))}
		</>
	);
}

export default golobeRoutes;
