import { useState, useEffect } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const MaterialList = () => {
    const [materials, setMaterials] = useState([]);

    useEffect(() => {
    // Replace with your actual backend API call to fetch materials
    const mockMaterialData = [
        { name: 'Material 1', description: 'Descripción del material 1', kiloValue: 10 },
        { name: 'Material 2', description: 'Descripción del material 2', kiloValue: 15 },
        { name: 'Material 3', description: 'Descripción del material 3', kiloValue: 20 },
    ];
    setMaterials(mockMaterialData);
    }, []);

    return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh">
        <Box mb={6}>
        <Text fontSize="2xl" fontWeight="bold">Materiales</Text>
        </Box>
        <Flex wrap="wrap" justify="center">
        {materials.map((material) => (
            <Box key={material.name} margin={2} p={4} bgColor="white" borderRadius="8">
            <Link to={`/materials/${material.name}`}>
                <Text fontSize="lg" fontWeight="bold">{material.name}</Text>
                <Text fontSize="md">{material.description}</Text>
            </Link>
            </Box>
        ))}
        </Flex>
    </Flex>
    );
};

export default MaterialList;
