import { Button, Flex, Spacer } from "@chakra-ui/react";
import { FaUserSecret, FaBuilding } from "react-icons/fa";

const UserProfileRoles = (props) => {
    const { selectedRole, handleRoleChange } = props;
    
    return (
      <Flex mt={4} justify="space-between" align="center" w="40%">
        <Button onClick={() => handleRoleChange("Empresa")} colorScheme="blue" 
        width={"7em"} height={"2em"} >
          <FaBuilding /> Empresa
        </Button>
        <Button onClick={() => handleRoleChange("Usuario")} colorScheme="blue"
        width={"7em"} height={"2em"}>
          <FaUserSecret /> Usuario
        </Button>
      </Flex>
    );
  };
export default UserProfileRoles;
