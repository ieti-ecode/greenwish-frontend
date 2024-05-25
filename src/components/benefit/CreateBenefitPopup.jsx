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
  Input,
  Box,
  Textarea,
} from "@chakra-ui/react";
import { request } from "../../api/AxiosHandler";
import React, { useState } from "react";

export const CreateBenefitPopup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [titleN, setTitle] = useState("");
  const [descriptionN, setDescription] = useState("");
  const [imageN, setImage] = useState("");
  const [pointsN, setPoints] = useState();

  function onSubmit() {
    request("POST", "/benefits", {
      name: titleN,
      description: descriptionN,
      value: pointsN
    })
      .then((response) => {
        request("POST", "/benefits/"+response.data.id, {
          name: titleN,
          description: descriptionN,
          value: pointsN,
          image: imageN

        })
      })
      .catch((error) => {
        console.log(error);
      });
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
        Crear Nuevo Beneficio
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Nombre del nuevo Beneficio </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box pb={3}>
              <Text fontSize="sm" fontWeight="bold">
                Nombre del Beneficio:
              </Text>
              <Input
                focusBorderColor="lime"
                value={titleN}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Text fontSize="sm" fontWeight="bold">
                Descipción del Beneficio:
              </Text>
              <Textarea
                focusBorderColor="lime"
                size="lg"
                value={descriptionN}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Text fontSize="sm" fontWeight="bold">
                Cantidad de puntos requeridos para cangear el beneficio:
              </Text>
              <Input
                focusBorderColor="lime"
                type="number"
                value={pointsN}
                onChange={(e) => setPoints(e.target.value)}
              />
              <Text fontSize="sm" fontWeight="bold">
                Carga la imagen del beneficio:
              </Text>
              <Input
                type="file"
                focusBorderColor="lime"
                value={imageN}
                onChange={(e) => setImage(e.target.value)}
              />
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="green"
              mr={3}
              onClick={() => {
                onSubmit();
                onClose();
              }}
            >
              Aceptar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
