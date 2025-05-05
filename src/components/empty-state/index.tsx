import { Button } from "@chakra-ui/react"
import { Frown } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface EmptyState {
    message: string
}

export default function EmptyState({ message }: EmptyState) {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col justify-center items-center">
            <img width={600} src="/src/assets/not_found.svg" alt="" />
            <p className="flex text-red-500 gap-2"><Frown />{message}</p>
            <Button colorScheme="teal" mt={2} onClick={() => navigate(-1)}>GO BACK</Button>
        </div>
    )
}