import { useState, useEffect } from 'react';
import { Flex, Box, Text, Image } from '@chakra-ui/react';

const MaterialDetail = ({ match }) => {
  const [material, setMaterial] = useState(null);

  useEffect(() => {
    // Replace with your actual backend API call to fetch material details
    const mockMaterialData = {
      name: 'Material 1',
      description: 'Descripción detallada del material 1',
      kiloValue: 10,
      imageUrl: 'https://placehold.co/200x150', // Replace with actual image URL
    };
    setMaterial(mockMaterialData);
  }, [match.params.name]); // Dependency on name from URL params

  if (!material) {
    return <p>Cargando información del material...</p>;
  }

  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh">
      <Box mb={6}>
        <Text fontSize="2xl" fontWeight="bold">Detalle del Material</Text>
      </Box>
      <Box mb={4}>
        <Image src={material.imageUrl} alt={material.name} width="200" height="150" />
      </Box>
      <Box mb={4}>
        <Text fontSize="lg" fontWeight="bold">{material.name}</Text>
        <Text fontSize="md">Descripción: {material.description}</Text>
        <Text fontSize="md">Valor por kilo: {material.kiloValue}</Text>
      </Box>
    </Flex>
  );
};

export default MaterialDetail;
