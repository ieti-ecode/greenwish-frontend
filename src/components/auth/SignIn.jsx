import { Button, Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { request, setAuthToken, setIdUser } from "../../api/AxiosHandler";
import FormField from "./FormField";

const SignIn = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm({ mode: "onChange" });
  

  function onSubmit(values) {
    request("POST", "/auth/signin", {
      email: values.email,
      password: values.password,
    })
      .then((response) => {
        setAuthToken(response.data.token);
        console.log(response.data);
        setIdUser(response.data.userId);
        request("GET", `/users/${response.data.userId}`).then((response) => {
          let role = response.data.role;
          if (role === "Administrator") {
            window.location.href = "/welcome";
          } else if (role === "Customer") {
            window.location.href = "/welcomeClient";
          } else if (role === "Company") {
            window.location.href = "/welcomeCompany";
          }
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        id="email"
        label="Correo Electrónico"
        type="email"
        placeholder="Tu correo electrónico"
        validation={{
          required: "Campo obligatorio",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "No es un correo válido",
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
          required: "Campo obligatorio",
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
  );
};

export default SignIn;
