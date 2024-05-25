import { Box, Input, Spinner, Text } from "@chakra-ui/react";
import UserList from "../../components/user/UserList";
import useUsers from "../../hooks/user/useUsers";
import HeaderWelcome from "../../components/welcome/HeaderWelcome";

const UsersPage = () => {
  const { users, loading, error, deleteUser, setSearchQuery } = useUsers();

  return (
    <Box p={5}>
        <HeaderWelcome />
        <Input 
            placeholder="Buscar por nombre" 
            mb={5} 
            onChange={(e) => setSearchQuery(e.target.value)} 
        />
        {loading && <Spinner />}
        {error && <Text color="red.500">Error: {error.message}</Text>}
        {!loading && !error && <UserList users={users} onDelete={deleteUser} />}
    </Box>
  );
};

export default UsersPage;
