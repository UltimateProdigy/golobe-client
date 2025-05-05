import { Button, Flex, Text } from "@chakra-ui/react";

interface PaginationProps {
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({
    currentPage,
    totalItems,
    itemsPerPage,
    onPageChange,
}: PaginationProps) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <Flex justify="center" align="center" gap={4} py={6}>
            <Button
                onClick={handlePrevPage}
                isDisabled={currentPage === 1}
                bg={currentPage === 1 ? "gray.300" : "#8DD3BB"}
                color="white"
                _hover={{ bg: currentPage === 1 ? "gray.300" : "#6DAF94" }}
            >
                Previous
            </Button>
            <Text>
                Page {currentPage} of {totalPages}
            </Text>
            <Button
                onClick={handleNextPage}
                isDisabled={currentPage === totalPages}
                bg={currentPage === totalPages ? "gray.300" : "#8DD3BB"}
                color="white"
                _hover={{ bg: currentPage === totalPages ? "gray.300" : "#6DAF94" }}
            >
                Next
            </Button>
        </Flex>
    );
}