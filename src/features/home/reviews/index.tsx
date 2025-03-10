import { Box, Button } from "@chakra-ui/react";
import { reviews } from "./data";
import Marquee from "react-fast-marquee";
import { truncateWords } from "../../../lib/utils";
import { Facebook } from "lucide-react";

export default function Reviews() {
	return (
		<div className="px-14 mt-[130px]">
			<div className="flex justify-between mb-8">
				<div>
					<p className="font-bold text-4xl">Reviews</p>
					<p>What people says about Golobe facilities</p>
				</div>
				<Button border="1px solid green" bg="transparent">
					See All
				</Button>
			</div>
			<div>
				<Marquee>
					{reviews.map((review) => (
						<Box
							key={review.id}
							boxShadow="lg"
							rounded="md"
							bg="white"
							borderRadius={10}
							p={6}
							position="relative"
							overflow="hidden"
							minWidth="300px"
							mr={6}
							mt={6}
							mb={6}
						>
							<p className="font-bold text-lg">
								"{review.header}"
							</p>
							<p className="mt-2">{truncateWords(review.desc)}</p>

							<Box
								display="flex"
								justifyContent="space-between"
								alignItems="center"
								mt={4}
							>
								<Box display="flex" alignItems="center">
									{Array.from(
										{ length: review.star },
										(_, i) => (
											<span
												key={i}
												className="text-yellow-500"
											>
												★
											</span>
										)
									)}
								</Box>
								<p className="cursor-pointer">View More</p>
							</Box>

							<Box mt={4}>
								<p className="font-semibold">{review.author}</p>
								<p className="text-sm text-gray-600">
									{review.company}
								</p>
							</Box>
							<Box display="flex" fontSize="xs" mt={6}>
								<Facebook color="blue" size={17} />
								<p>Facebook</p>
							</Box>

							{review.image && (
								<img
									src={review.image}
									alt="review"
									className="mt-4 rounded-lg"
								/>
							)}
						</Box>
					))}
				</Marquee>
			</div>
		</div>
	);
}
