import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, useDisclosure, FormControl, FormLabel } from "@chakra-ui/react";
import { IProfile } from "../../lib/types";
import { Edit } from "lucide-react";
import { useState } from "react";
import api from "../../api";
import { useAuth } from "../../context/authContext";
import { useCustomToast } from "../../hooks/useToast";

interface IAccount {
    data?: IProfile;
}

export default function Account({ data }: IAccount) {
    const { user } = useAuth();
    const [editingField, setEditingField] = useState<string | null>(null);
    const [tempValue, setTempValue] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false)
    const showToast = useCustomToast();

    const handleEditClick = (field: string, currentValue: string) => {
        setEditingField(field);
        setTempValue(currentValue);
        onOpen();
    };

    const handleSave = async () => {
        if (!editingField || !user?.id) return;
        setIsLoading(true)
        try {
            await api.put(`/api/user/${user.id}`, {
                [editingField]: tempValue
            });
            onClose();
            showToast({
                title: "Success",
                description: "Updated Successfully",
                status: "success",
            });
            window.location.reload();
        } catch (error) {
            console.error("Failed to update:", error);
            showToast({
                title: "Login Failed",
                description: "Error updating data",
                status: "error",
            });
        } finally {
            setIsLoading(false)
        }
    };

    const fields = [
        { label: "First Name", key: "firstName", value: data?.firstName || "" },
        { label: "Last Name", key: "lastName", value: data?.lastName || "" },
        { label: "Email", key: "email", value: data?.email || "" },
        { label: "Phone Number", key: "phoneNumber", value: data?.phoneNumber || "" },
        { label: "Address", key: "address", value: data?.address || "" },
        { label: "Date of Birth", key: "dateOfBirth", value: data?.dateOfBirth || "" }
    ];

    return (
        <div>
            <p className="font-bold text-4xl">Account</p>
            <div className="shadow-lg p-7 flex flex-col gap-6 mt-4">
                {fields.map((field) => (
                    <div key={field.key} className="flex justify-between items-center">
                        <div>
                            <p>{field.label}</p>
                            <p className="font-bold">
                                {field.key === 'password' ? '*************' : field.value || 'N/A'}
                            </p>
                        </div>
                        <Button
                            border='2px solid #8DD3BB'
                            background='white'
                            leftIcon={<Edit size={13} />}
                            onClick={() => handleEditClick(field.key, field.value)}
                        >
                            Change
                        </Button>
                    </div>
                ))}
            </div>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit {editingField}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>
                                {fields.find(f => f.key === editingField)?.label}
                            </FormLabel>
                            <Input
                                value={tempValue}
                                onChange={(e) => setTempValue(e.target.value)}
                                placeholder={`Enter new ${editingField}`}
                            />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="ghost" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button
                            colorScheme="green"
                            onClick={handleSave}
                            isDisabled={!tempValue.trim()}
                            isLoading={isLoading}
                        >
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
}