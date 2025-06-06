import { useToast } from "@chakra-ui/react";

interface IToast {
    title: string;
    description?: string;
    status: "success" | "info" | "warning" | "error" | "loading";
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
            position: "top-right",
        });
    };

    return showToast;
};
