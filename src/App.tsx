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

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path={routes.index} element={<MainLayout />}>
			{golobeRoutes()}
		</Route>
	)
);
function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
