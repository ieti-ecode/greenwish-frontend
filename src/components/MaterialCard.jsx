import React from 'react';
import { Box, VStack, Text, Button, Image, HStack } from '@chakra-ui/react';
import './MaterialCard.css';

const MaterialCard = ({ material, onAdd, onEdit, onDelete }) => {
  const imageUrl = material.image && material.image.data ? `data:image/png;base64,${material.image.data}` : null;

  return (
    <Box p="4" bg="white" borderRadius="md" boxShadow="md" width="250px">
      <VStack spacing="4" align="center">
        <Image
          src={imageUrl}
          alt={material.name}
          className="card-image"
        />
        <Text fontWeight="bold" textAlign="center">{material.name}</Text>
        <Text textAlign="center">{material.description}</Text>
        <Text textAlign="center">{material.kiloValue} puntos por kg</Text>
        {onAdd && (
          <Button colorScheme="green" onClick={() => onAdd(material)}>Agregar</Button>
        )}
        {onEdit && onDelete && (
          <HStack>
            <Button colorScheme="yellow" onClick={onEdit}>Editar</Button>
            <Button colorScheme="red" onClick={onDelete}>Eliminar</Button>
          </HStack>
        )}
      </VStack>
    </Box>
  );
};

export default MaterialCard;