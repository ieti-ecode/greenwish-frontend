import { useState, useEffect } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const BenefitList = () => {
  const [benefits, setBenefits] = useState([]);

  useEffect(() => {
    // Replace with your actual backend API call to fetch benefits
    const mockBenefitData = [
      { id: 1, name: 'Beneficio 1', description: 'Descripción del beneficio 1' },
      { id: 2, name: 'Beneficio 2', description: 'Descripción del beneficio 2' },
      { id: 3, name: 'Beneficio 3', description: 'Descripción del beneficio 3' },
    ];
    setBenefits(mockBenefitData);
  }, []);

  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh">
      <Box mb={6}>
        <Text fontSize="2xl" fontWeight="bold">Beneficios</Text>
      </Box>
      <Flex wrap="wrap" justify="center">
        {benefits.map((benefit) => (
          <Box key={benefit.id} margin={2} p={4} bgColor="white" borderRadius="8">
            <Link to={`/benefits/${benefit.id}`}>
              <Text fontSize="lg" fontWeight="bold">{benefit.name}</Text>
              <Text fontSize="md" color="gray.500">{benefit.description}</Text>
            </Link>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default BenefitList;
