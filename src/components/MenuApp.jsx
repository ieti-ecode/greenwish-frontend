import { ViewIcon, AtSignIcon, AddIcon, LinkIcon } from '@chakra-ui/icons';
import { Box, Icon, List, ListItem, Text, Image, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const MenuApp = () => {
    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" mb="6" mx={10} mt="4">
            <Box display="flex" alignItems="center">
                <Image src={logo} alt="Logo" boxSize="80px" />
                <Heading lineHeight="2" fontSize="4xl" ml="2" bgGradient="linear(to-l, green.300, green.500)" bgClip="text" >GreenWish</Heading>
            </Box>
            <Box mr="4">
                <Box as="nav">
                    <List display="flex" flexDirection="row" gap="55">
                        <ListItem>
                            <Link to="/company" style={{ display: 'flex', alignItems: 'center' }}>
                                <Icon as={LinkIcon} boxSize={5} mr="2" color='green.500' />
                                <Text bgGradient="linear(to-l, green.300, green.500)" bgClip="text" fontWeight="bold" fontSize='xl'>Aliados</Text>
                            </Link>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Box>

    )
}

export default MenuApp