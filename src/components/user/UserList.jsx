import { Box, Flex, Avatar, Text, Button, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const UserList = (props) => {
    const { users, onDelete } = props;
    return (
        <Box width="100%" height="100%">
        {users.map(user => (
            <Flex key={user.id} alignItems="center" justifyContent="space-between" p={2} borderBottom="1px solid #ccc">
            <Flex alignItems="center">
                <Avatar src={`http://localhost:8080/api/v1/users/${user.id}/image`} mr={3} />
                <Box>
                <Text><strong>ID:</strong> {user.id}</Text>
                <Text><strong>Nombre:</strong> {user.name}</Text>
                <Text><strong>Correo:</strong> {user.email}</Text>
                </Box>
            </Flex>
            <IconButton icon={<FaTrash />} colorScheme="red" onClick={() => onDelete(user.id)} />
            </Flex>
        ))}
        </Box>
    );
};

export default UserList;
