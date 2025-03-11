import { Input, Flex, Button } from "@chakra-ui/react";
import {
	FacebookIcon,
	TwitterIcon,
	Instagram,
	YoutubeIcon,
} from "lucide-react";
import { destinations, activities, blogs, aboutUs, contactUs } from "./data";
import { useNavigate } from "react-router-dom";

export default function Footer() {
	const navigate = useNavigate();

	return (
		<div>
			<div
				className="bg-[#CDEAE1] p-8 rounded-4xl w-[90%] relative overflow-hidden left-[80px] top-[150px]"
				style={{
					backgroundImage: "url(/src/assets/mailbox.png)",
					backgroundPosition: "right center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "contain",
				}}
			>
				<p className="text-[50px] font-bold leading-12">
					Subscribe <br />
					Newsletter
				</p>
				<p className="font-bold text-xl pt-8">The Travel</p>
				<p className="text-gray-500">
					Get Inspired! Receive travel discounts, tips, and
					behind-the-scenes stories.
				</p>
				<Flex gap={4} w="50%" mt={4}>
					<Input bg="white" placeholder="Your email address" />
					<Button bg="#112211" color="white">
						Subscribe
					</Button>
				</Flex>
			</div>
			<div className="bg-[#8DD3BB] pt-[200px] px-20 flex justify-between pb-20">
				<div>
					<img
						src="/src/assets/golobe_icon_white.png"
						alt="golobe_logo"
					/>
					<div className="flex gap-2 pt-3">
						<FacebookIcon />
						<TwitterIcon />
						<YoutubeIcon />
						<Instagram />
					</div>
				</div>
				<div>
					<p className="font-bold">Our Destinations</p>
					{destinations.map((data) => (
						<p
							className="cursor-pointer pb-1 pt-2 text-gray-700"
							onClick={() => navigate(data.route)}
						>
							{data.name}
						</p>
					))}
				</div>
				<div>
					<p className="font-bold">Our Activities</p>
					{activities.map((data) => (
						<p
							className="cursor-pointer pb-1 pt-2 text-gray-700"
							onClick={() => navigate(data.route)}
						>
							{data.name}
						</p>
					))}
				</div>
				<div>
					<p className="font-bold">Travel Blogs</p>
					{blogs.map((data) => (
						<p
							className="cursor-pointer pb-1 pt-2 text-gray-700"
							onClick={() => navigate(data.route)}
						>
							{data.name}
						</p>
					))}
				</div>
				<div>
					<p className="font-bold">About Us</p>
					{aboutUs.map((data) => (
						<p
							className="cursor-pointer pb-1 pt-2 text-gray-700"
							onClick={() => navigate(data.route)}
						>
							{data.name}
						</p>
					))}
				</div>
				<div>
					<p className="font-bold">Contact Us</p>
					{contactUs.map((data) => (
						<p
							className="cursor-pointer pb-1 pt-2 text-gray-700"
							onClick={() => navigate(data.route)}
						>
							{data.name}
						</p>
					))}
				</div>
			</div>
		</div>
	);
}
