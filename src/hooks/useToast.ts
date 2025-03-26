import { useToast } from "@chakra-ui/react";

interface IToast {
	title: string;
	description?: string;
	status: string | any;
}

export const useCustomToast = () => {
	const toast = useToast();

	const showToast = ({ title, description, status }: IToast) => {
		toast({
			title,
			description,
			status,
			duration: 5000,
			isClosable: true,
			position: "top",
		});
	};

	return showToast;
};
