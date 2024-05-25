import { Flex, Box, Input, Button } from "@chakra-ui/react";

const UserProfileImage = (props) => {
    const { imageFile, setImageFile, handleSaveImage } = props;
    return (
      <Box mt={4}>
        <Input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} />
        <Flex mt={4} justifyContent="center" alignItems="center" flexDirection="column">
          <Button colorScheme="green" width={"10em"} height={"2em"}
            onClick={handleSaveImage}>Guardar Imagen
          </Button>
        </Flex>
      </Box>
    );
  };

export default UserProfileImage;
