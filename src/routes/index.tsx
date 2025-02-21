import { lazy, ReactNode, Suspense } from "react";
import { routes } from "../lib/constants/routes";
import { Route } from "react-router-dom";
import Loader from "../components/loader";

const Home = lazy(() => import("../pages/home/index"));
const Login = lazy(() => import("../pages/auth/login/index"));
const Register = lazy(() => import("../pages/auth/register/index"));

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
