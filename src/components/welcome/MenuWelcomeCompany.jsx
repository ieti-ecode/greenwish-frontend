import { ViewIcon, AtSignIcon, AttachmentIcon, SettingsIcon } from '@chakra-ui/icons';
import { Box, Icon, List, ListItem, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Menu = () => {
    return (
        <Box as="nav">
            <List display="flex" flexDirection="row" gap="55">
                <Link to="/welcomeComany" style={{ display: 'flex', alignItems: 'center' }}>
                    <Icon as={ViewIcon} boxSize={5} mr="2" color='green.500' />
                    <Text bgGradient="linear(to-l, green.300, green.500)" bgClip="text" fontWeight="bold" fontSize='xl'>Inicio</Text>
                </Link>
                <ListItem>
                    <Link to="/user" style={{ display: 'flex', alignItems: 'center' }}>
                        <Icon as={AtSignIcon} boxSize={5} mr="2" color='green.500' />
                        <Text bgGradient="linear(to-l, green.300, green.500)" bgClip="text" fontWeight="bold" fontSize='xl'>Usuario</Text>
                    </Link>
                </ListItem>
                
                <ListItem>
                    <Link to="/material" style={{ display: 'flex', alignItems: 'center' }}>
                        <Icon as={AttachmentIcon} boxSize={5} mr="2" color='green.500' />
                        <Text bgGradient="linear(to-l, green.300, green.500)" bgClip="text" fontWeight="bold" fontSize='xl'>Materiales</Text>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="/company" style={{ display: 'flex', alignItems: 'center' }}>
                        <Icon as={SettingsIcon} boxSize={5} mr="2" color='green.500' />
                        <Text bgGradient="linear(to-l, green.300, green.500)" bgClip="text" fontWeight="bold" fontSize='xl'>Empresas</Text>
                    </Link>
                </ListItem>
            </List>
        </Box>
    )
}
