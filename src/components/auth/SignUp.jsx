import { Button, Flex, Icon, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import { request } from "../../api/AxiosHandler";
import { ArrowBackIcon } from "@chakra-ui/icons";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        id="name"
        label="Nombre"
        type="text"
        placeholder="Tu nombre completo"
        validation={{
          required: "El campo es obligatorio",
          minLength: { value: 4, message: "La longitud mínima debe ser 4" },
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
          required: "El campo es obligatorio",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "El valor ingresado no coincide con el formato de correo electrónico",
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
          required: "El campo es obligatorio",
          minLength: { value: 4, message: "La longitud mínima debe ser 4" },
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
          required: "El campo es obligatorio",
          minLength: { value: 4, message: "La longitud mínima debe ser 4" },
          validate: (value) =>
            value === getValues("password") || "Las contraseñas no coinciden",
        }}
        register={register}
        getValues={getValues}
        errors={errors}
      />
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Registrarse
      </Button>
    </form>
  );
};

export default SignUp;
