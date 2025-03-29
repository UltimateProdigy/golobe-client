import { BedDoubleIcon, PlaneIcon } from "lucide-react";
import { routes } from "../../lib/constants/routes";
import Logo from "../icons/logo";
import { useNavigate, useLocation } from "react-router-dom";
import { Avatar, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { Popover, PopoverTrigger, PopoverContent, PopoverBody } from '@chakra-ui/react';
import { Settings, LogOut, User, Heart } from 'lucide-react';
import { useCookie } from "../../hooks/useCookie";
export default function Navbar() {
	const navigate = useNavigate();
	const location = useLocation();
	const [isActive, setIsActive] = useState<number>();
	const { removeAccessToken } = useCookie()
	const { user, setUser } = useAuth();

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
						className={"flex gap-2 cursor-pointer"}
						onClick={() => handleClick(link.id, link.route)}
						style={{ borderBottom: `${isActive === link.id ? "3px solid #8DD3BB" : ""}` }}
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

			{user ? (
				<div className="flex items-center">
					<div className="flex gap-1 items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
						<Heart fill="black" />
						<p>Favourites</p>
					</div>
					<Popover placement="bottom-end">
						<PopoverTrigger>
							<div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
								<Avatar name={`${user.firstName} ${user.lastName}`} size="sm" />
								<p className="font-medium">{user.lastName}</p>
							</div>
						</PopoverTrigger>
						<PopoverContent width="200px" boxShadow="lg" borderRadius="lg">
							<PopoverBody className="space-y-2 p-2">
								<div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
									<User className="w-4 h-4" />
									<span className="text-sm">Profile</span>
								</div>

								<div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
									<Settings className="w-4 h-4" />
									<span className="text-sm">Settings</span>
								</div>

								<div
									className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md text-red-500"
									onClick={() => {
										removeAccessToken();
										setUser(null);
										navigate(routes.auth.login);
									}}
								>
									<LogOut className="w-4 h-4" />
									<span className="text-sm">Logout</span>
								</div>
							</PopoverBody>
						</PopoverContent>
					</Popover>
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
