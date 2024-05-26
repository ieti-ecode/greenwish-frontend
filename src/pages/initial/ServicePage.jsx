import { Box, Card, CardBody, CardHeader, Center, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { ServiceList } from '../../components/initial/ServiceList';
import Header from '../../components/initial/Header';
import Contact from '../../components/initial/Contact';
import service from '../../assets/service.jpg';
export default function ServicePage() {

    const serviceListCompany = [

        {
            title: "Rutas Óptimas para Recolección",
            description: "Modelos de IA para rutas de recolección eficientes, reduciendo costos y el impacto ambiental derivado del transporte."
        },
        {
            title: "Informes Analíticos",
            description: "Accede a informes detallados sobre el volumen de plástico reciclado, las ganancias en puntos y el impacto ambiental positivo de tu empresa."
        },
        {
            title: "Venta de Plástico",
            description: "Integra el plástico reciclado en tu cadena de suministro y contribuye a una economía circular."
        }
    ];

    const serviceListCitizen = [

        {
            title: "Puntos de Reciclaje",
            description: "Busca fácilmente los puntos de recolección más cercanos a ti a través de nuestro mapa interactivo. ¡Deja tu plástico y comienza a ganar puntos!"
        },
        {
            title: "Asesoria de Reciclaje",
            description: "Nuestro equipo te brinda orientación sobre la correcta separación y clasificación de tu material para un reciclaje óptimo."
        },
        {
            title: "Programa de Puntos Rentable",
            description: "Recibe puntos por cada kilo de plástico que recicles. Canjéalos por fantásticas recompensas como descuentos en productos ecológicos, entradas a eventos sostenibles o donaciones a causas medio ambientales"
        }
    ];

    return (

        <Box>
            <Header />
            <Box width='100%' mb="10" height='30vh' display='flex' justifyContent='center' alignItems='center' position='relative'>
                <Image width='100%' height='100%' objectFit='cover' opacity={0.6} src={service} alt="Plasticos" />
                <VStack position='absolute' color='gray.700' spacing={4}>
                    <Heading as='h1' size='xl' mb={4}>¡Juntos podemos construir un futuro más sostenible!</Heading>
                </VStack>
            </Box>
            <Heading as="h2" size="xl" mb="8" fontSize="4xl" ml="2" bgGradient="linear(to-l, green.300, green.500)" bgClip="text" textAlign="center">Para los Ciudadanos</Heading>
            <ServiceList list={serviceListCitizen} />

            <Heading mt="9" as="h2" size="xl" mb="8" fontSize="4xl" ml="2" bgGradient="linear(to-l, green.300, green.500)" bgClip="text" textAlign="center" >Para las Empresas</Heading>

            <ServiceList list={serviceListCompany} />
            <Contact />
        </Box>
    )
}