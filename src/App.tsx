import "./App.css";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import golobeRoutes from "./routes";
import { routes } from "./lib/constants/routes";
import MainLayout from "./features/layout";
import { useCookie } from "./hooks/useCookie";
import { useEffect } from "react";
import { setupInterceptors } from "./api";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path={routes.index} element={<MainLayout />}>
			{golobeRoutes()}
		</Route>
	)
);
function App() {
	const { getAccessToken, setAccessToken } = useCookie();

	useEffect(() => {
		setupInterceptors({ getAccessToken, setAccessToken });
	}, [getAccessToken, setAccessToken]);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;