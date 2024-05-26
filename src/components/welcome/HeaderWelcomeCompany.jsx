import { Box, Image, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Menu } from './MenuWelcomeCompany';
import logo from '../../assets/logo.jpg';


const Header = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" mb="6" px={4} mt="4" w="100%">
      <Box display="flex" alignItems="center">
        <Image src={logo} alt="Logo" boxSize="80px" />
        <Link to="/">
          <Heading lineHeight="2" fontSize={{ base: "2xl", md: "4xl" }} ml="2" bgGradient="linear(to-l, green.300, green.500)" bgClip="text">GreenWish</Heading>
        </Link>
      </Box>
      <Box>
        <Menu />
      </Box>
    </Box>
  );
}

export default Header;
