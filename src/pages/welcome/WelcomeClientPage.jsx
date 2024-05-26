import { Box, Text, Heading, VStack, Image, Flex } from "@chakra-ui/react";
import Header from "../../components/welcome/HeaderWelcomeClient";
import Contact from "../../components/initial/Contact";

export default function WelcomePage() {
    return (
        <Box width="100vw" height="100vh">
            <Header />
            <Box width='100%' height='30vh' display='flex' justifyContent='center' alignItems='center' position='relative'>
                <Image width='100%' height='100%' objectFit='cover' opacity={0.5} src="src\assets\back.jpg" alt="Plasticos" />
                <VStack position='absolute' color='gray.700' spacing={4}>
                    <Heading as='h1' size='xl' mb={4}>
                        <Text>Nuestra meta es transformar Bogotá en una ciudad</Text>
                        <Text>más limpia y sostenible, donde cada acción cuenta</Text>
                    </Heading>
                </VStack>
            </Box>
            <Flex direction={['column', 'row']} justify="space-between" maxWidth="100%" p="9">
                <Box flex="1" ml="10%" mr="100">
                    <Heading as="h2" size="xl" mb="8" fontSize="5xl" ml="2" bgGradient="linear(to-l, green.300, green.500)" bgClip="text">Bienvenidos a GreenWish!</Heading>
                    <Heading as="h2" size="xl" mb="8" fontSize="xl" ml="2" bgGradient="linear(to-l, green.300, green.500)" bgClip="text">¿Estás listo para convertirte en un héroe del reciclaje?</Heading>
                    
                </Box>
                <Box flex="1" mr="1" alignSelf="center" justifySelf="center">
                    <Image src="src\assets\city.jpg" alt="Your Image" boxSize="500px" />
                </Box>
            </Flex>
        </Box>
    )
}