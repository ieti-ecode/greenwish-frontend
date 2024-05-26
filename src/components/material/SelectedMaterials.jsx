import React from "react";
import {
  Box,
  VStack,
  Text,
  Grid,
  GridItem,
  Input,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { request, getIdUser } from "../../api/AxiosHandler";
import { useState, useEffect } from "react";
import AlertMessage from "../AlertMessage";

const SelectedMaterials = ({
  selectedMaterials,
  onQuantityChange,
  onRemove,
}) => {
  const totalPoints = selectedMaterials.reduce(
    (sum, material) => sum + material.kiloValue * material.quantity,
    0
  );
  const [userPoints, setUserPoints] = useState();
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    request("GET", `/users/${getIdUser()}`).then((response) => {
      setUserPoints(response.data.points);
    });
  }, []);
  function claimPoints() {
    request("PUT", `/users/${getIdUser()}/points`, {
      points: userPoints + totalPoints,
    }).then(() => {
      setAlertMessage(`Haz conseguido: ${totalPoints} puntos`);
      setAlertOpen(true);
    });
  }
  return (
    <Box
      p="4"
      bg="white"
      borderRadius="md"
      boxShadow="md"
      mb="4"
      width="100%"
      maxWidth="600px"
      mx="auto"
    >
      <Text fontSize="2xl" mb="4">
        Materiales Seleccionados
      </Text>
      <VStack spacing="4" align="stretch">
        {selectedMaterials.map((material) => (
          <Grid
            key={material.id}
            templateColumns="2fr 1fr 1fr auto"
            gap={4}
            alignItems="center"
          >
            <GridItem>
              <Text>{material.name}</Text>
            </GridItem>
            <GridItem>
              <Input
                width="100%"
                type="number"
                value={material.quantity}
                onChange={(e) =>
                  onQuantityChange(material.id, parseFloat(e.target.value))
                }
              />
            </GridItem>
            <GridItem>
              <Text>{material.kiloValue * material.quantity} puntos</Text>
            </GridItem>
            <GridItem>
              <IconButton
                icon={<DeleteIcon />}
                colorScheme="red"
                onClick={() => onRemove(material.id)}
              />
            </GridItem>
          </Grid>
        ))}
      </VStack>
      <Text fontSize="xl" fontWeight="bold" mt="4">
        Total Puntos: {totalPoints}
      </Text>
      <Button
        colorScheme="green"
        mr={3}
        onClick={() => {
          claimPoints();
        }}
      >
        Reciclar
      </Button>
      <AlertMessage isOpen={alertOpen} onClose={() => setAlertOpen(false)} title="¡Genial!" message={alertMessage} />
    </Box>
  );
};

export default SelectedMaterials;
