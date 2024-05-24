import React from 'react'
import { Flex, Box, Image, Icon } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import SignIn from '../components/auth/SignIn'
import Header from '../components/initial/Header'


const SignInPage = () => {
  return (
    <>
        <Header />
        <Flex minHeight="100vh" alignItems="center" justifyContent="center" bg="gray.50">
        <Flex direction="row" width="100%" maxWidth="800px" p={5} m={5} boxShadow="2xl" bg="white">
            <Box flex="1">
            <Link to="/">
                <Icon as={ArrowBackIcon} w={8} h={8} color='green.500' />
            </Link>
            <Image src="/src/assets/logo.jpg" alt="Your alt text" />
            </Box>
            <Box flex="1" display="flex" flexDirection="column" alignItems="center" width="90%" justifyContent="center" >
            <SignIn />
            </Box>
        </Flex>
        </Flex>
        </>
  )
}

export default SignInPage