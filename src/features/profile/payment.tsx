import { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext"
import { CirclePlus } from "lucide-react";
import api from "../../api";
import { useCustomToast } from "../../hooks/useToast";
import { ICard } from "../../lib/types";
import { useDisclosure } from "@chakra-ui/react";
import AddCardModal from "./addCard";


export default function PaymentMethods() {
    const { user } = useAuth();
    const [card, setCard] = useState([])
    const showToast = useCustomToast();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const getCards = async () => {
        try {
            const res = await api.get(`/api/card/${user?.id}`)
            setCard(res.data)
            console.log(res.data)
        } catch (err) {
            console.log(err)
            showToast({
                title: "Login Failed",
                description: "Error updating data",
                status: "error",
            });
        }
    }

    useEffect(() => {
        getCards();
    }, [user?.id])

    if (!card) {
        return <p>You do not have any payment method on this account yet</p>
    }

    return (
        <div>
            <p className="font-bold text-3xl">Payment Methods</p>
            <div className="shadow-lg p-7 mt-6">
                <div className="grid grid-cols-4 gap-6">
                    {card.map((data: ICard) => (
                        <div className="w-[270px] h-[180px] bg-[#8DD3BB] p-4 rounded-3xl flex flex-col justify-between">
                            <div>
                                <p className="font-bold">**** ***** ****</p>
                                <p className="text-2xl">{data.cardNumber.slice(-4)}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-xs">VALID THRU</p>
                                    <p className="font-bold text-xl">{data.expDate}</p>
                                </div>
                                <img width={30} src="/src/assets/visa.svg" alt="visa" />
                            </div>
                        </div>
                    ))}
                    <div
                        style={{ border: "2px dashed #8DD3BB" }}
                        className="w-[270px] h-[180px] p-4 rounded-3xl flex flex-col justify-center items-center cursor-pointer hover:bg-gray-200 transition"
                        onClick={onOpen}
                    >
                        <CirclePlus color="#8DD3BB" size={40} />
                        <p>Add New Card</p>
                    </div>
                </div>
            </div>
            <AddCardModal
                isOpen={isOpen}
                onClose={onClose}
                onCardAdded={getCards}
            />
        </div>
    )
}