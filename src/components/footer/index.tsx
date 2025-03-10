import { Input, Flex, Button } from "@chakra-ui/react";

export default function Footer() {
	return (
		<div>
			<div className="bg-[#CDEAE1] mt-20 p-8">
				<p className="text-[50px] font-bold">
					Subscribe <br />
					Newsletter
				</p>
				<p>The Travel</p>
				<p>
					Get Inspired! Recieve travel discounts, tips and behind the
					scenes stories
				</p>
				<Flex gap={4}>
					<Input bg="white" placeholder="Your email address" />
					<Button bg="#112211" color="white">
						Subscribe
					</Button>
				</Flex>
			</div>
			<div></div>
		</div>
	);
}
