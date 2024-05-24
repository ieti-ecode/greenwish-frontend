import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon, EditIcon } from '@chakra-ui/icons';

export const Contact = () => {
    return (
        <Flex direction="row" justify="space-around" mt="10" alignItems="center" background="gray.50">
                <Box mr="5">
                    <Heading as="h2" size="xl" mb="8" fontSize="4xl" ml="2" bgGradient="linear(to-l, green.300, green.500)" bgClip="text">Contáctanos</Heading>
                    <Image src="src\assets\green.png" alt="GreenWish" boxSize="200px" />
                </Box>
                <Box>
                    <HStack spacing="2" align="center">
                        <PhoneIcon boxSize="6" color='green.500'/>
                        <Heading as="h3" size="lg" mb="5" bgGradient="linear(to-l, green.300, green.500)" bgClip="text">Teléfono:</Heading>
                    </HStack>
                    <Text mb="5" fontSize='lg'>+57 321 537 8265</Text>
                    <HStack spacing="2" align="center">
                        <EmailIcon boxSize="6" color='green.500'/>
                        <Heading as="h3" size="lg" mb="5" bgGradient="linear(to-l, green.300, green.500)" bgClip="text">Email:</Heading>
                    </HStack>
                    <Text fontSize='lg'>ecode@mail.escuelaing.edu.co</Text>
                </Box>
                <Box>
                    <HStack spacing="2" align="center">
                        <EditIcon boxSize="6" color='green.500'/>
                        <Heading as="h3" size="lg" mb="5" bgGradient="linear(to-l, green.300, green.500)" bgClip="text">Autores:</Heading>
                    </HStack>
                    <Text fontSize='lg'>Andrea Johana Durán</Text>
                    <Text fontSize='lg'>Angie Natalia Mojica</Text>
                    <Text fontSize='lg'>Brian Camilo Fajardo</Text>
                    <Text fontSize='lg'>Daniel Antonio Santanilla</Text>
                    <Text fontSize='lg'>Jefer Alexis Gonzalez</Text>
                </Box>
            </Flex>
    )
}