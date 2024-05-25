import { Box, VStack, Image, Heading } from "@chakra-ui/react";
import CompaniesList from "../../components/initial/CompaniesList";
import Header from "../../components/initial/Header";
import Contact from "../../components/initial/Contact";

const AlliedPage = () => {
    return (
        <Box width="100vw" height="100vh" display="flex" flexDirection="column">
            <Header />
            <Box width='100%' mb="10" height='30vh' display='flex' justifyContent='center' alignItems='center' position='relative'>
                <Image width='100%' height='100%' objectFit='cover' opacity={0.6} src="src\assets\company.jpg" alt="Plasticos" />
                <VStack position='absolute' color='gray.700' spacing={4}>
                    <Heading as='h1' size='xl' mb={4}>¡Únete a nosotros y transforma el plástico en herramientas innovadoras!</Heading>
                </VStack>
            </Box>
            <Heading as="h2" size="xl" mb="8" fontSize="4xl" ml="2" bgGradient="linear(to-l, green.300, green.500)" bgClip="text" textAlign="center">Empresas que nos acompañan en este reto</Heading>
            <CompaniesList/>
            <Contact />
        </Box>
    );
}

export default AlliedPage;