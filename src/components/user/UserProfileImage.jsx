import React, { useState } from "react";
import { Flex, Box, Input, Button } from "@chakra-ui/react";

const UserProfileImage = ({ imageFile, setImageFile, handleSaveImage }) => {
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e) => {
    setImageFile({ ...imageFile, image: e.target.files[0] });
  };

  const handleClick = async () => {
    setIsSaving(true);
    await handleSaveImage();
    setIsSaving(false); 
  };

  return (
    <Box mt={4}>
      <Input type="file" name="image" accept="image/*" onChange={handleChange} />
      <Flex mt={4} justifyContent="center" alignItems="center" flexDirection="column">
        <Button colorScheme="green" width={"10em"} height={"2em"} onClick={handleClick} disabled={isSaving}>
          {isSaving ? "Guardando..." : "Actualizar Imagen"}
        </Button>
      </Flex>
    </Box>
  );
};

export default UserProfileImage;
