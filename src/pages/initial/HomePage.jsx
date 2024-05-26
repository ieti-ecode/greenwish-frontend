import { Box, Text, Heading, VStack, Image, Flex, ListIcon, UnorderedList, ListItem } from "@chakra-ui/react";
import { CheckIcon } from '@chakra-ui/icons';
import Header from "../../components/initial/Header";
import Contact from "../../components/initial/Contact";

export default function HomePage() {
    return (
        <Box>
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
                    <Text fontSize="xl" ml="2" textAlign="justify" mb="8">Únete a nuestro proyecto en desarrollo y ayúdanos a crear un impacto positivo en el medio ambiente. Buscamos personas comprometidas como tú para que reciclen el plástico que usan a diario y así contribuir a un futuro más sostenible. </Text>
                    <Heading as="h2" size="xl" mb="8" fontSize="xl" ml="2" bgGradient="linear(to-l, green.300, green.500)" bgClip="text">¿Cómo funciona?</Heading>
                    <UnorderedList styleType="none">
                        <ListItem>
                            <Flex align="center" mb="3">
                                <ListIcon as={CheckIcon} boxSize="5" color="green.500" />
                                <Text fontSize="xl" textAlign="justify">
                                    Separa tu plástico: Recolecta botellas, envases y otros objetos de plástico que ya no uses.
                                </Text>
                            </Flex>
                        </ListItem>
                        <ListItem>
                            <Flex align="center" mb="3">
                                <ListIcon as={CheckIcon} boxSize="5" color="green.500" />
                                <Text fontSize="xl" textAlign="justify">
                                    Gana puntos: Recibirás puntos por cada kilo de plástico que recicles.
                                </Text>
                            </Flex>
                        </ListItem>
                        <ListItem>
                            <Flex align="center">
                                <ListIcon as={CheckIcon} boxSize="5" color="green.500" />
                                <Text fontSize="xl" textAlign="justify">
                                    Canjea tus puntos: ¡Tus puntos te dan acceso a increíbles recompensas! Puedes obtener descuentos en productos ecológicos, entradas a eventos sostenibles o incluso donaciones a causas ambientales.
                                </Text>
                            </Flex>
                        </ListItem>
                    </UnorderedList>
                </Box>
                <Box flex="1" mr="1" alignSelf="center" justifySelf="center">
                    <Image src="src\assets\city.jpg" alt="Your Image" boxSize="500px" />
                </Box>
            </Flex>
            <Contact />
        </Box>
    )
}