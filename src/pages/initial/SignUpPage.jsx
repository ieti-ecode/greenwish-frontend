import { ArrowBackIcon } from '@chakra-ui/icons'
import { Box, Flex, Icon, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import SignUp from '../../components/auth/SignUp'
import Contact from '../../components/initial/Contact'
import Header from '../../components/initial/Header'

const SignUpPage = () => {
  return (
    <Box width="100vw" height="100vh" display="flex" flexDirection="column">
        <Header />
        <Flex flex="1" alignItems="center" justifyContent="center" bg="gray.50">
        <Flex direction="row" width="100%" maxWidth="800px" p={5} m={5} boxShadow="2xl" bg="white">
            <Box flex="1">
            <Link to="/auth/signin">
                <Icon as={ArrowBackIcon} w={8} h={8} color='green.500' />
            </Link>
            <Image src="/src/assets/logo.jpg" alt="Your alt text" />
            </Box>
            <Box flex="1" display="flex" flexDirection="column" alignItems="center" width="90%" justifyContent="center" >
            <SignUp />
            </Box>
        </Flex>
        </Flex>
        <Contact />
    </Box>
  )
}

export default SignUpPage