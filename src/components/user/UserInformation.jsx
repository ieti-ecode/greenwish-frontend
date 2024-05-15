import React, { useState } from 'react';
import { Flex, Box, Text, Input, Button } from '@chakra-ui/react';

const UserInformation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Implement your logic to update user information
    // (e.g., call backend API)
    console.log('Actualizando información del usuario...');
  };

  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh">
        <Box mb={6}>
        <Text fontSize="2xl" fontWeight="bold">Información del Usuario</Text>
      </Box>
      <Box mb={4}>
        <Text fontSize="md">Nombre:</Text>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </Box>
      <Box mb={4}>
        <Text fontSize="md">Correo electrónico:</Text>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Box>
      <Box mb={4}>
        <Text fontSize="md">Contraseña:</Text>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Box>
      <Button onClick={handleSubmit} colorScheme="blue" variant="solid">
        Actualizar información
      </Button>
    </Flex>
  );
};

export default UserInformation;

