import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Flex, Box, Text, Image } from '@chakra-ui/react';

const BenefitDetail = () => {
    const [benefit, setBenefit] = useState(null);
    const { id } = useParams();
  
    useEffect(() => {
      const fetchData = async () => {
        const mockBenefitData = {
          id: '1',
          name: 'Descuento en Cinecolombia',
          description: 'Disfruta de un 20% de descuento en las boletas de Cinecolombia presentando tu tarjeta GreenWish.',
          value: 100,
          imageUrl: 'https://placehold.co/200x150',
        };
        setBenefit(mockBenefitData);
      };
  
      fetchData();
    }, [id]);

  if (!benefit) {
    return <p>Cargando beneficio...</p>;
  }

  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh">
      <Box mb={6}>
        <Text fontSize="2xl" fontWeight="bold">Detalle del Beneficio</Text>
      </Box>
      <Box mb={4}>
        <Image src={benefit.imageUrl} alt={benefit.name} width="200" height="150" />
      </Box>
      <Box mb={4}>
        <Text fontSize="lg" fontWeight="bold">{benefit.name}</Text>
        <Text fontSize="md">{benefit.description}</Text>
      </Box>
      <Box mb={4}>
        <Text fontSize="lg" fontWeight="bold">Valor:</Text>
        <Text fontSize="md">{benefit.value} puntos</Text>
      </Box>
    </Flex>
  );
};

export default BenefitDetail;
