import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Avatar, Input, IconButton, InputGroup, InputRightElement, InputLeftElement, Button, Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaEdit, FaCheck, FaTimes, FaPencilAlt } from "react-icons/fa";
import FormField from "../auth/FormField";
import "./User.css";
import UserProfileRoles from "./UserProfileRoles";
import UserProfileImage from "./UserProfileImage";

const UserProfile = (props) => {
  const { user, saveChanges, uploadProfileImage } = props;
  const {
    register,
    formState: { errors },
    getValues,
    setValue 
  } = useForm({ mode: "onChange" });
  const [editedUser, setEditedUser] = useState({...user});
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const imageSrc = editedUser.image? `data:image/png;base64,${editedUser.image.data}` : "https://via.placeholder.com/150";

  useEffect(() => {
    setEditedUser(user);
  }, [user]);

  const handleSaveClick = async () => {
    setIsEditing(false);
    const updatedData = {
     ...editedUser,
      isCompany: selectedRole,
    };
    console.log(updatedData);
    await saveChanges(updatedData);
    if (imageFile) {
      await uploadProfileImage(imageFile);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prevState => ({
     ...prevState,
      [name]: value,
    }));
    setValue(name, value);
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const handleRoleChange = (newRole) => {
    setSelectedRole(newRole === "Empresa");
    setEditedUser(prevState => ({ ...prevState, role: newRole }));
  };
  
  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <Box p={5} boxShadow="md" bg="white" borderRadius="md" width="100%">
      
      <Flex direction="column" alignItems="center">
        <Avatar 
          name={editedUser.name} 
          src={editedUser.avatar} 
          size={{ base: "lg", md: "xl" }} 
          mb={4} 
        />
        {!isEditing? (
          <>
            <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
              {user.name}
            </Text>
            <Text fontSize="md" color="gray.500" mb={2}>
              {user.email}
            </Text>
          </>
        ) : (
          <>
            <UserProfileRoles selectedRole={selectedRole} handleRoleChange={handleRoleChange} />
            <UserProfileImage setImageFile={setImageFile} handleSaveImage={() => uploadProfileImage(imageFile)} />
            <FormField
              id="name"
              label="Nombre"
              type="text"
              placeholder={user.name}
              validation={{
                required: "Este campo es requerido",
                minLength: { value: 4, message: "La longitud mínima debe ser 4" },
              }}
              register={register}
              getValues={getValues}
              errors={errors}
              onChange={handleInputChange}
            />
            <FormField
              id="email"
              label="Correo electrónico"
              type="email"
              placeholder={user.email}
              validation={{
                required: "Este campo es requerido",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "El valor ingresado no coincide con el formato de correo electrónico",
                },
              }}
              register={register}
              getValues={getValues}
              errors={errors}
              onChange={handleInputChange}
            />
            <InputGroup>
              <FormField
                id="password"
                label="Nueva Contraseña"
                type={showPassword? "text" : "password"}
                placeholder={showPassword? "********" : user.password}
                validation={{
                  required: "Este campo es requerido",
                  minLength: { value: 4, message: "La longitud mínima debe ser 4" },
                }}
                register={register}
                getValues={getValues}
                errors={errors}
                onChange={handleInputChange}
              />
              <InputRightElement width="7rem" height="6.5rem">
                <IconButton aria-label="Toggle password visibility" 
                            icon={showPassword? <FaEyeSlash className="eye-icon" /> : <FaEye className="eye-icon" />} 
                            onClick={togglePasswordVisibility} 
                            colorScheme="blue" 
                            size="sm"
                />
              </InputRightElement>
            </InputGroup>
          </>
          
        )}
        <Box display="flex" justifyContent="space-between">
          <Button onClick={toggleEditMode} colorScheme="red">
            {isEditing? <FaTimes /> : <FaEdit />}
          </Button>
          {isEditing && (
            <Button onClick={handleSaveClick} colorScheme="green">
              <FaCheck />
            </Button>
          )}
        </Box>
        
      </Flex>
    </Box>
  );
};

export default UserProfile;