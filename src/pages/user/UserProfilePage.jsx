import { Box, Flex, Spinner, Alert, AlertIcon } from "@chakra-ui/react";
import HeaderWelcome from "../../components/welcome/HeaderWelcomeClient";
import UserProfile from "../../components/user/UserProfile"; 
import useUserProfile from "../../hooks/user/useUserProfile"; 

const UserProfilePage = () => {
  const { user, loading, error, updateUserProfile, uploadProfileImage } = useUserProfile();

  return (
    <Box width="100vw" height="100vh">
      <HeaderWelcome />
      <Flex alignItems="center" justifyContent="center" bg="gray.50" p={4} flex="1" width="100%">
        <Flex direction="column" p={5} boxShadow="2xl" bg="white" borderRadius="md" width={{ base: "100%", md: "90%", lg: "80%" }}>
          {loading && <Spinner size="xl" />}
          {error && (
            <Alert status="error">
              <AlertIcon />
              {error.message}
            </Alert>
          )}
          {user && <UserProfile user={user} saveChanges={updateUserProfile} uploadProfileImage={uploadProfileImage} />}
        </Flex>
      </Flex>
    </Box>
  );
};

export default UserProfilePage;
