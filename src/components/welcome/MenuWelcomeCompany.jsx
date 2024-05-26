import { ViewIcon, AtSignIcon, AttachmentIcon, SettingsIcon } from '@chakra-ui/icons';
import { Box, Icon, List, ListItem, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaUser, FaUserTie, FaBox, FaBuilding, FaMoneyBillAlt, FaUserFriends } from "react-icons/fa";

export const Menu = () => {
    return (
        <Box as="nav">
            <List display="flex" flexDirection="row" gap="55">
                <Link to="/welcomeCompany" style={{ display: 'flex', alignItems: 'center' }}>
                    <Icon as={ViewIcon} boxSize={5} mr="2" color='green.500' />
                    <Text bgGradient="linear(to-l, green.300, green.500)" bgClip="text" fontWeight="bold" fontSize='xl'>Inicio</Text>
                </Link>
                <ListItem>
                    <Link to="/userCompany" style={{ display: 'flex', alignItems: 'center' }}>
                        <Icon as={FaUserTie} boxSize={5} mr="2" color='green.500' />
                        <Text bgGradient="linear(to-l, green.300, green.500)" bgClip="text" fontWeight="bold" fontSize='xl'>Usuario</Text>
                    </Link>
                </ListItem>
            </List>
        </Box>
    )
}
