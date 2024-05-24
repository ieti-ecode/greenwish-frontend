import { useState, useEffect } from 'react';
import { Flex, Box, Text, Image } from '@chakra-ui/react';

const CompanyDetail = ({ match }) => {
  const [company, setCompany] = useState(null);

  useEffect(() => {
    // Replace with your actual backend API call to fetch company details
    const mockCompanyData = {
      name: 'Compañía 1',
      phoneNumber: '1234567890',
      address: 'Calle 123',
      imageUrl: 'https://placehold.co/200x150', // Replace with actual image URL
    };
    setCompany(mockCompanyData);
  }, [match.params.name]); // Dependency on name from URL params

  if (!company) {
    return <p>Cargando información de la compañía...</p>;
  }

  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh">
      <Box mb={6}>
        <Text fontSize="2xl" fontWeight="bold">Detalle de la Empresa</Text>
      </Box>
      <Box mb={4}>
        <Image src={company.imageUrl} alt={company.name} width="200" height="150" />
      </Box>
      <Box mb={4}>
        <Text fontSize="lg" fontWeight="bold">{company.name}</Text>
        <Text fontSize="md">Teléfono: {company.phoneNumber}</Text>
        <Text fontSize="md">Dirección: {company.address}</Text>
      </Box>
    </Flex>
  );
};

export default CompanyDetail;
