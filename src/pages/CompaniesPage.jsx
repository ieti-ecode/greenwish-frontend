import { CompanyForm } from "../components/company/CompanyForm";
import CompaniesList from "../components/initial/CompaniesList";
import { useDisclosure } from '@chakra-ui/hooks'
import MenuAppp from "../components/MenuApp";
import { Button, Heading, Box, Modal, ModalBody, Text, ModalContent, ModalCloseButton, ModalOverlay, ModalHeader, ModalFooter } from '@chakra-ui/react';

export default function CompaniesPage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const isAdmin = true

    return (
        <>
            <MenuAppp />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>¡Nos alegra crecer!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text fontSize="2xl" fontWeight="bold" mb={4}>Agrega la empresa</Text>
                        <Box p={5} shadow="md" borderWidth="1px">
                            <CompanyForm />
                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Cancelar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Box width="100vw" height="100vh" display="flex" flexDirection="column">
            <Heading as="h2" size="xl" mb="8" fontSize="4xl" ml="2" bgGradient="linear(to-l, green.300, green.500)" bgClip="text" textAlign="center">Esta es nuestra comunidad</Heading>
            <Box width="100%" display="flex" justifyContent="center" alignItems="center" flexDirection="column" mb={-5}>
                <Button colorScheme="green" onClick={onOpen} mb={5}>Agregar Empresa</Button>
                <CompaniesList button={isAdmin} />
            </Box>
        </Box>
        </>
    )
}