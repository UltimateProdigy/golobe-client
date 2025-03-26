import { BedDoubleIcon, PlaneIcon } from "lucide-react";
import { routes } from "../../lib/constants/routes";
import Logo from "../icons/logo";
import { useNavigate, useLocation } from "react-router-dom";
import { Avatar, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useAuth } from "../../context/authContext";

export default function Navbar() {
	const navigate = useNavigate();
	const location = useLocation();
	const [isActive, setIsActive] = useState<number>();
	const { auth } = useAuth();

	const handleClick = (id: number, route: string) => {
		navigate(route);
		setIsActive(id);
	};

	const links = [
		{
			id: 1,
			name: "Find Flight",
			icon: PlaneIcon,
			route: routes.flights.index,
		},
		{
			id: 2,
			name: "Find Stays",
			icon: BedDoubleIcon,
			route: routes.hotels.index,
		},
	];

	if ([routes.auth.login, routes.auth.register].includes(location.pathname)) {
		return null;
	}

	return (
		<div className="flex justify-between items-center px-14 py-6">
			<div className="flex gap-8 items-center">
				{links.map((link) => (
					<div
						key={link.id}
						className={`flex gap-2 cursor-pointer ${isActive === link.id
							? "border-b-4 border-teal-400"
							: ""
							}`}
						onClick={() => handleClick(link.id, link.route)}
					>
						<div>
							<link.icon />
						</div>
						<p>{link.name}</p>
					</div>
				))}
			</div>

			<Logo
				className="cursor-pointer mr-6"
				onClick={() => navigate(routes.index)}
			/>

			{auth ? (
				<div className="flex items-center gap-3">
					<Avatar name={`${auth.firstName} ${auth.lastName}`} />
					<p>{auth.lastName}</p>
				</div>
			) : (
				<div className="flex gap-10 items-center">
					<Button onClick={() => navigate(routes.auth.login)} bg="white">
						Login
					</Button>
					<Button
						onClick={() => navigate(routes.auth.register)}
						bg="black"
						color="white"
					>
						Signup
					</Button>
				</div>
			)}
		</div>
	);
}
