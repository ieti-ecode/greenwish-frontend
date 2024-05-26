import FormField from "../auth/FormField";
import { Button, Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { request } from "../../api/AxiosHandler";

export const CompanyForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        getValues,
    } = useForm({ mode: "onChange" });

    function onSubmit(values) {
        const formData = new FormData();
        formData.append("image", values.image[0]);
        request("POST", "/companies", {
            name: values.name,
            description: values.description,
            phoneNumber: values.phoneNumber,
            address: values.address,
        })
            .then((response) => {
                const id = response.data.id;
                return request("POST", `/companies/${id}/image`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
            })
            .then((response) => {
                console.log("Imagen subida con éxito");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormField
                    id="name"
                    label="Nombre"
                    type="text"
                    placeholder="Nombre de la Empresa"
                    validation={{
                        required: "Campo requerido",
                        minLength: { value: 3, message: "Mínimo 3 caracteres" },
                    }}
                    register={register}
                    getValues={getValues}
                    errors={errors}
                    mb="6"
                />
                <FormField
                    id="description"
                    label="Descripción"
                    type="text"
                    placeholder="Descripción de la Empresa"
                    validation={{
                        required: "Campo requerido",
                        minLength: { value: 20, message: "Mínimo 20 caracteres" },
                    }}
                    register={register}
                    getValues={getValues}
                    errors={errors}
                    mb="6"
                />
                <FormField
                    id="phoneNumber"
                    label="Teléfono"
                    type="text"
                    placeholder="Teléfono de la Empresa"
                    validation={{
                        required: "Campo requerido",
                        minLength: { value: 3, message: "Mínimo 3 caracteres" },
                    }}
                    register={register}
                    getValues={getValues}
                    errors={errors}
                    mb="6"
                />
                <FormField
                    id="address"
                    label="Dirección"
                    type="text"
                    placeholder="Dirección de la Empresa"
                    validation={{
                        required: "Campo requerido",
                        minLength: { value: 3, message: "Mínimo 3 caracteres" },
                    }}
                    register={register}
                    getValues={getValues}
                    errors={errors}
                    mb="6"
                />
                <FormField
                    id="image"
                    label="Imagen del Logo"
                    type="file"
                    register={register}
                    getValues={getValues}
                    errors={errors}
                    mb="6"
                />
                <Flex justifyContent="center">
                    <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
                        Crear
                    </Button>
                </Flex>
            </form>
        </div>
    );
}