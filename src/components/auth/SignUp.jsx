import { Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import { request } from "../../api/AxiosHandler";

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
        label="Name"
        type="text"
        placeholder="Your name"
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
        label="Email"
        type="email"
        placeholder="Your email address"
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
        label="Password"
        type="password"
        placeholder="Your password"
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
        label="Confirm password"
        type="password"
        placeholder="Confirm your password"
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
        Sing Up
      </Button>
    </form>
    
  );
};

export default SignUp;
