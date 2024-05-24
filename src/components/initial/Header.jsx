import { Box, Image, Heading } from '@chakra-ui/react';
import { Menu } from './Menu';
import logo from '../../assets/logo.jpg';

const Header = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" mb="6" mx={10} mt="4">
      <Box display="flex" alignItems="center">
        <Image src={logo} alt="Logo" boxSize="80px" />
        <Heading lineHeight="2" fontSize="4xl" ml="2" bgGradient="linear(to-l, green.300, green.500)" bgClip="text" >GreenWish</Heading>
      </Box>
      <Box mr="4">
        <Menu />
      </Box>
    </Box>
  )
}

export default Header
