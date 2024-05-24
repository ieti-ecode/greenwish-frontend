import { useState, useEffect } from 'react';
import { Flex, Box, Text, Link } from '@chakra-ui/react';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Replace with your actual backend API call to fetch companies
    const mockCompanyData = [
      { name: 'Compañía 1', phoneNumber: '1234567890', address: 'Calle 123' },
      { name: 'Compañía 2', phoneNumber: '9876543210', address: 'Avenida Principal' },
      { name: 'Compañía 3', phoneNumber: '0123456789', address: 'Carrera 45' },
    ];
    setCompanies(mockCompanyData);
  }, []);

  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh">
      <Box mb={6}>
        <Text fontSize="2xl" fontWeight="bold">Empresas</Text>
      </Box>
      <Flex wrap="wrap" justify="center">
        {companies.map((company) => (
          <Box key={company.name} margin={2} p={4} bgColor="white" borderRadius="8">
            <Link to={`/companies/${company.name}`}>
              <Text fontSize="lg" fontWeight="bold">{company.name}</Text>
              <Text fontSize="md">{company.phoneNumber}</Text>
              <Text fontSize="md">{company.address}</Text>
            </Link>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default CompanyList;
