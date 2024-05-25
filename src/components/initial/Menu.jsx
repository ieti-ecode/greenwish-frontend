import { ViewIcon, AtSignIcon, AddIcon, LinkIcon } from '@chakra-ui/icons';
import { Box, Icon, List, ListItem, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Menu = () => {
    return (
        <Box as="nav">
            <List display="flex" flexDirection="row" gap="55">
                <ListItem>
                    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                        <Icon as={ViewIcon} boxSize={5} mr="2" color='green.500' />
                        <Text bgGradient="linear(to-l, green.300, green.500)" bgClip="text" fontWeight="bold" fontSize='xl'>Inicio</Text>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="/services" style={{ display: 'flex', alignItems: 'center' }}>
                        <Icon as={AddIcon} boxSize={5} mr="2" color='green.500' />
                        <Text bgGradient="linear(to-l, green.300, green.500)" bgClip="text" fontWeight="bold" fontSize='xl'>Servicios</Text>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="/allied" style={{ display: 'flex', alignItems: 'center' }}>
                        <Icon as={LinkIcon} boxSize={5} mr="2" color='green.500' />
                        <Text bgGradient="linear(to-l, green.300, green.500)" bgClip="text" fontWeight="bold" fontSize='xl'>Aliados</Text>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="/auth/signin" style={{ display: 'flex', alignItems: 'center' }}>
                        <Icon as={AtSignIcon} boxSize={5} mr="2" color='green.500' />
                        <Text bgGradient="linear(to-l, green.300, green.500)" bgClip="text" fontWeight="bold" fontSize='xl'>Únete</Text>
                    </Link>
                </ListItem>
            </List>
        </Box>
    )
}