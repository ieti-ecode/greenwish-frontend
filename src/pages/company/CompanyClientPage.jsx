import { Box, Heading } from "@chakra-ui/react";
import  Header from "../../components/welcome/HeaderWelcomeClient";
import CompaniesList from "../../components/initial/CompaniesList";

const CompanyClientPage = () => {
    return (
        <Box width="100vw" height="100vh" display="flex" flexDirection="column">
            <Header />
            <Heading as="h2" size="xl" mb="8" fontSize="4xl" ml="2" bgGradient="linear(to-l, green.300, green.500)" bgClip="text" textAlign="center">Empresas que nos acompañan en este reto</Heading>
            <Box width="100%" display="flex" justifyContent="center" alignItems="center" flexDirection="column" mb={-5}>
                <CompaniesList/>
            </Box>
        </Box>
    );
}

export default CompanyClientPage;