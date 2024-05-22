import { Flex, Box, Text, Input, Button, IconButton, InputGroup, InputRightElement, Badge, InputLeftElement } from '@chakra-ui/react';
import { ArrowBackIcon, EditIcon, CheckIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import useUserInformation from '../../hooks/user/useUserInformation';

const UserInformation = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    isEditing,
    toggleEditing,
    showPassword,
    toggleShowPassword,
    nameValid,
    emailValid,
    passwordValid,
    nameErrorMessage,
    emailErrorMessage,
    passwordErrorMessage,
    handleSave,
    validateName,
    validateEmail,
    validatePassword,
  } = useUserInformation();

  const renderValidationBadge = (valid, errorMessage) => {
    if (valid) {
      return <Badge colorScheme="green">{errorMessage}</Badge>;
    } else {
      return <Badge colorScheme="red">{errorMessage}</Badge>;
    }
  };

  const handleInputChange = (setter, validator) => (event) => {
    setter(event.target.value);
    validator();
  };


  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh">
      <Flex align="center" justify="space-between" width="100%" px={4} py={4}>
        <IconButton
          icon={<ArrowBackIcon />}
          aria-label="Return"
          onClick={() => window.location.href = '/'}
          variant="ghost"
          colorScheme="blue"
          fontSize="20px"
        />
        <IconButton
          icon={isEditing ? <CheckIcon /> : <EditIcon />}
          aria-label={isEditing ? 'Save' : 'Edit'}
          onClick={isEditing ? handleSave : toggleEditing}
          variant="ghost"
          colorScheme="blue"
          fontSize="20px"
          mr={2}
          disabled={!isEditing || !nameValid || !emailValid || !passwordValid}
        />
      </Flex>

      <Box mb={6}>
        <Text fontSize="2xl" fontWeight="bold">
          Información del Usuario
        </Text>
      </Box>

      <Box mb={4}>
        <Text fontSize="md">Nombre:</Text>
        <InputGroup>
          <Input
            value={name}
            onChange={handleInputChange(setName, validateName)}
            isDisabled={!isEditing}
          />
        </InputGroup>
        {isEditing && (
          <Box mt={2}>
            <Text fontSize="sm" color="red.500">
              {nameErrorMessage}
            </Text>
          </Box>
        )}
      </Box>

      <Box mb={4}>
        <Text fontSize="md">Correo electrónico:</Text>
        <InputGroup>
          <Input
            type="email"
            value={email}
            onChange={handleInputChange(setEmail, validateEmail)}
            isDisabled={!isEditing}
          />
        </InputGroup>
        {isEditing && (
          <Box mt={2}>
            <Text fontSize="sm" color="red.500">
              {emailErrorMessage}
            </Text>
          </Box>
        )}
      </Box>

      <Box mb={4}>
        <Text fontSize="md">Contraseña:</Text>
        <InputGroup>
          <Input
            type={showPassword? "text" : "password"}
            value={password}
            onChange={handleInputChange(setPassword, validatePassword)}
            isDisabled={!isEditing}
          />
          <InputLeftElement width="25rem">
            <IconButton
              h="1.2rem"
              size="sm"
              icon={showPassword? <ViewOffIcon /> : <ViewIcon />}
              onClick={toggleShowPassword}
            />
          </InputLeftElement>
        </InputGroup>
        {isEditing && (
          <Box mt={2}>
            <Text fontSize="sm" color="red.500">
              {passwordErrorMessage}
            </Text>
          </Box>
        )}
      </Box>
    </Flex>
  );
};

export default UserInformation;
