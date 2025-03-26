import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/authContext.tsx";
import "./index.css";
import App from "./App.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ChakraProvider>
			<AuthProvider>
				<QueryClientProvider client={queryClient}>
					<App />
				</QueryClientProvider>
			</AuthProvider>
		</ChakraProvider>
	</StrictMode>
);
