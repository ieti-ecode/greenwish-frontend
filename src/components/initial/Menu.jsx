import { EditIcon, QuestionIcon, ViewIcon, AtSignIcon, AddIcon } from '@chakra-ui/icons';
import { Box, Icon, List, ListItem, Text, Flex } from '@chakra-ui/react';
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
                    <Link to="/about" style={{ display: 'flex', alignItems: 'center' }}>
                        <Icon as={QuestionIcon} boxSize={5} mr="2" color='green.500' />
                        <Text bgGradient="linear(to-l, green.300, green.500)" bgClip="text" fontWeight="bold" fontSize='xl'>Quiénes Somos</Text>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="/services" style={{ display: 'flex', alignItems: 'center' }}>
                        <Icon as={AddIcon} boxSize={5} mr="2" color='green.500' />
                        <Text bgGradient="linear(to-l, green.300, green.500)" bgClip="text" fontWeight="bold" fontSize='xl'>Servicios</Text>
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