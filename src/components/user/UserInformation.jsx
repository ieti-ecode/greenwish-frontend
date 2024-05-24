import { Flex, Box, Text, Input, Button, IconButton, InputGroup, InputRightElement, Badge, InputLeftElement } from '@chakra-ui/react';
import { ArrowBackIcon, EditIcon, CheckIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import useUserInformation from '../../hooks/user/useUserInformation';
import './User.css';

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
    let badgeColor = "invalid-badge"; // Predeterminado a rojo
    if (valid) {
      badgeColor = "valid-badge";
    }
    return <Badge className={`error-badge ${badgeColor}`}>{errorMessage}</Badge>;
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

      <Box mb={8}>
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
            {renderValidationBadge(nameValid, nameErrorMessage)}
          </Box>
        )}
      </Box>

      <Box mb={8}>
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
            {renderValidationBadge(emailValid, emailErrorMessage)}
          </Box>
        )}
      </Box>

      <Box mb={8}>
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
            {renderValidationBadge(passwordValid, passwordErrorMessage)}
          </Box>
        )}
      </Box>

    </Flex>
  );
};

export default UserInformation;
