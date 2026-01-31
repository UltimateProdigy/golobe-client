import { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import api from "../../api";
import { useAuth } from "../../context/authContext";
import { AddCardModalProps } from "../../lib/types";

const fields = [
  { label: "Card Number", key: "cardNumber", type: "number" },
  { label: "Expiry Date", key: "expDate", type: "text", placeholder: "MM/YY" },
  { label: "CVC", key: "cvc", type: "password" },
  { label: "Card Name", key: "cardName", type: "text" },
];

export default function AddCardModal({
  isOpen,
  onClose,
  onCardAdded,
}: AddCardModalProps) {
  const { user } = useAuth();
  const toast = useToast();
  const [formData, setFormData] = useState<object>({
    cardNumber: "",
    expDate: "",
    cvc: "",
    cardName: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string,
  ) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!user?.id) return;
    setIsSubmitting(true);
    try {
      await api.post(`/api/card/${user.id}`, formData);
      toast({
        title: "Success",
        description: "Card added successfully",
        status: "success",
      });
      onCardAdded();
      onClose();
      setFormData({ cardNumber: "", expDate: "", cvc: "", cardName: "" });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to add card",
        status: "error",
      });
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add a new Card</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {fields.map((field) => (
            <FormControl key={field.key} mb={4}>
              <FormLabel>{field.label}</FormLabel>
              <Input
                value={formData[field.key as keyof typeof formData]}
                onChange={(e) => handleInputChange(e, field.key)}
                placeholder={
                  field.placeholder || `Enter ${field.label.toLowerCase()}`
                }
                type={field.type}
                pb={2}
              />
            </FormControl>
          ))}
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button
            colorScheme="green"
            onClick={handleSubmit}
            isLoading={isSubmitting}
            loadingText="Adding..."
          >
            Add Card
          </Button>
        </ModalFooter>
        <p className="text-xs px-6 pb-4">
          By confirming your subscription, you allow The Outdoor Inn Crowd
          Limited to charge your card for this payment and future payments in
          accordance with their terms. You can always cancel your subscription.
        </p>
      </ModalContent>
    </Modal>
  );
}
