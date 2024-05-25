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

export const EditBenefitPopup = ({ id, title, description, points }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [titleN, setTitle] = useState(title);
  const [descriptionN, setDescription] = useState(description);
  const [pointsN, setPoints] = useState(points);
  const [imageN, setImage] = useState("");

  function onSubmit() {
    request("PUT", "/benefits/" + id, {
      name: titleN,
      description: descriptionN,
      value: pointsN,
    })
      .then((response) => {
        
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function onSubmitImg() {
    const fromData = new FormData();
    fromData.append('image', imageN.image);
    console.log(id, imageN)
    request("POST", "/benefits/" + id+"/image", fromData, 'multipart/from-data')
      .then((response) => {
        console.log(response.data);
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
        Editar beneficio
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{titleN}</ModalHeader>
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
                name="image"
                focusBorderColor="lime"
                onChange={(e) => setImage({...imageN, image: e.target.files[0]})}
              />
              <Button
                colorScheme="green"
                mr={3}
                onClick={() => {
                  onSubmitImg();
                }}
              >
                Actualizar imagen
              </Button>
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
