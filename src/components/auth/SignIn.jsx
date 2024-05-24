import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Icon, Image } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { request, setAuthToken } from "../../api/AxiosHandler";
import FormField from "./FormField";

const SignIn = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm({ mode: "onChange" });

  function onSubmit(values) {
    request("POST", "/auth", {
      email: values.email,
      password: values.password,
    })
      .then((response) => {
        setAuthToken(response.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Flex minHeight="100vh" alignItems="center" justifyContent="center" bg="gray.50">
      <Flex direction="row" width="100%" maxWidth="800px" p={5} m={5} boxShadow="2xl" bg="white">
        <Box flex="1">
          <Link to="/">
            <Icon as={ArrowBackIcon} w={8} h={8} color='green.500' />
          </Link>
          <Image src="/src/assets/logo.jpg" alt="Your alt text" />
        </Box>
        <Box flex="1" display="flex" flexDirection="column" alignItems="center" width="90%" justifyContent="center" >
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormField
              id="email"
              label="Correo Electrónico"
              type="email"
              placeholder="Tu correo electrónico"
              validation={{
                required: "This is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              }}
              register={register}
              getValues={getValues}
              errors={errors}
              mb="6"
            />
            <FormField
              id="password"
              label="Contraseña"
              type="password"
              placeholder="Tu contraseña"
              validation={{
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
              }}
              register={register}
              getValues={getValues}
              errors={errors}
              mb="6"
            />
            <Flex justifyContent="center">
              <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
                Ingresar
              </Button>
              <Link to="/auth/signup">
                <Button mt={4} colorScheme="teal" ml={3}>
                  Crear cuenta
                </Button>
              </Link>
            </Flex>
          </form>
        </Box>
      </Flex>
    </Flex>
  );
};

export default SignIn;