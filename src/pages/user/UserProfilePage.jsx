import { useParams } from "react-router-dom";
import { Box, Flex, Spinner, Alert, AlertIcon } from "@chakra-ui/react";
import Header from "../../components/initial/Header";
import UserProfile from "../../components/user/UserProfile"; 
import useUserProfile from "../../hooks/user/useUserProfile"; 

const UserProfilePage = () => {
  const { userId } = useParams();
  const { user, loading, error, saveChanges } = useUserProfile(userId);
  

  return (
    <Box minHeight="100vh" width="100%">
      <Header />
      <Flex alignItems="center" justifyContent="center" bg="gray.50" p={4} flex="1" width="100%">
        <Flex direction="column" p={5} boxShadow="2xl" bg="white" borderRadius="md" width={{ base: "100%", md: "90%", lg: "80%" }}>
          {loading && <Spinner size="xl" />}
          {error && (
            <Alert status="error">
              <AlertIcon />
              {error.message}
            </Alert>
          )}
          {user && <UserProfile user={user} saveChanges={saveChanges}/>}
        </Flex>
      </Flex>
    </Box>
  );
};

export default UserProfilePage;
