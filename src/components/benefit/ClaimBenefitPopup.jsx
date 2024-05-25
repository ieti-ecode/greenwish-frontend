import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";

import React from "react";

export const ClaimBenefitPopup = ({ title, description, points }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const formatNumberWithDots = (value) => {
    return Number(value).toLocaleString("es-ES");
  };

  return (
    <>
      <Button
        mt={4}
        onClick={() => {
          onOpen();
        }}
        colorScheme="green"
      >
        Reclamar Recompensa
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="ml" pb={3}>{description}</Text>
            <Text fontSize="sm" fontWeight="bold">
              Puntos requeridos: {formatNumberWithDots(points)}
            </Text>
            <Text fontSize="sm" fontWeight="bold">
              Tus puntos: {formatNumberWithDots(points)}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onClose}>
              Reclamar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
