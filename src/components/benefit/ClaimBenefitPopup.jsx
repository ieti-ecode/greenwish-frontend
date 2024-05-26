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
import { request, getIdUser } from "../../api/AxiosHandler";
import { useState, useEffect } from "react";
import React from "react";
import AlertMessage from "../AlertMessage";

export const ClaimBenefitPopup = ({ title, description, points }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userPoints, setUserPoints] = useState();
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const formatNumberWithDots = (value) => {
    return Number(value).toLocaleString("es-ES");
  };

  useEffect(() => {
    request("GET", `/users/${getIdUser()}`).then((response) => {
      setUserPoints(response.data.points);
    });
  }, []);
  function claimBenefit() {
    if (userPoints >= points) {
      request("PUT", `/users/${getIdUser()}/points`, {
        points: userPoints - points,
      }).then(() => {
        setAlertMessage("Felicitaciones! Ya puedes disfrutar de tu recompensa");
        setAlertOpen(true);
        window.location.reload();
      });
    } else {
      setAlertMessage("No tienes suficientes puntos para reclamar esta recompensa");
      setAlertOpen(true);
    }
  }

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
            <Text fontSize="ml" pb={3}>
              {description}
            </Text>
            <Text fontSize="sm" fontWeight="bold">
              Puntos requeridos: {formatNumberWithDots(points)}
            </Text>
            <Text fontSize="sm" fontWeight="bold">
              Tus puntos: {formatNumberWithDots(userPoints)}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="green"
              mr={3}
              onClick={() => {
                claimBenefit();
                onClose();
              }}
            >
              Reclamar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <AlertMessage isOpen={alertOpen} onClose={() => setAlertOpen(false)} title="Sobre tus puntos" message={alertMessage} />
    </>
  );
};
