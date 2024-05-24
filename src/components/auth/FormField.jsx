import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

const FormField = (props) => {
  const {
    id,
    label,
    type,
    placeholder,
    validation,
    register,
    getValues,
    errors,
  } = props;
  return (
    <FormControl isInvalid={errors[id]} isRequired>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <InputGroup>
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(id, validation)}
        />
        {getValues(id) && !errors[id] && (
          <InputRightElement>
            <CheckIcon color="green.500" />
          </InputRightElement>
        )}
        {errors[id] && (
          <InputRightElement>
            <CloseIcon color="red.500" />
          </InputRightElement>
        )}
      </InputGroup>
      <FormErrorMessage>{errors[id] && errors[id].message}</FormErrorMessage>
    </FormControl>
  );
};

export default FormField;
