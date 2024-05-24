import { Button, Flex, Icon, Box, Image } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import { request } from "../../api/AxiosHandler";
import { ArrowBackIcon } from '@chakra-ui/icons';

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm({ mode: "onChange" });

  function onSubmit(values) {
    request("POST", "/users", {
      name: values.name,
      email: values.email,
      password: values.password,
    })
      .then((response) => {
        alert("User created successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Flex minHeight="100vh" alignItems="center" justifyContent="center" bg="gray.50">
      <Flex direction="row" width="100%" maxWidth="800px" p={5} m={5} boxShadow="2xl" bg="white">
        <Box flex="1">
          <Link to="/auth/signin">
            <Icon as={ArrowBackIcon} w={8} h={8} color='green.500' />
          </Link>
          <Image src="/src/assets/logo.jpg" alt="Your alt text" />
        </Box>
        <Box flex="1" display="flex" flexDirection="column" alignItems="center" width="90%" justifyContent="center" >
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormField
              id="name"
              label="Nombre"
              type="text"
              placeholder="Tu nombre completo"
              validation={{
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
              }}
              register={register}
              getValues={getValues}
              errors={errors}
            />
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
            />
            <FormField
              id="cpassword"
              label="Confirmar Contraseña"
              type="password"
              placeholder="Confirma tu contraseña"
              validation={{
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
                validate: (value) =>
                  value === getValues("password") || "The passwords do not match",
              }}
              register={register}
              getValues={getValues}
              errors={errors}
            />
            <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
              Registrarse
            </Button>
          </form>
        </Box>
      </Flex>
    </Flex>

          );
};

          export default SignUp;
