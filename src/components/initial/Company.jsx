import { Flex, IconButton, Box, Card, CardBody, Heading, Text, Image, Stack, CardFooter, Divider } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons';

export const Company = (props) => {

    const { image, name, description, number, address, button, onDelete } = props

    return (
        <Card maxW='sm' shadow='xl'>
            <CardBody>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Image src={image} borderRadius='lg' width="200px" height="200px" objectFit="cover" />
                </Box>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'> {name} </Heading>
                    <Text>{description}</Text>
                    <Heading size='sm'>Contactar</Heading>
                    <Text color='blue.600' fontSize='2xl'>{`+57 ${number}`}</Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <Stack spacing={4}>
                    <Flex justifyContent="space-between" alignItems="center">
                        <Box>
                            <Heading size='sm'>Puntos de Recolección</Heading>
                            <Text>{address}</Text>
                        </Box>
                        {button && <IconButton icon={<DeleteIcon />} onClick={onDelete} colorScheme="red" size="sm" aria-label="Eliminar" marginLeft="2em" />}
                    </Flex>
                </Stack>
            </CardFooter>
        </Card>
    )
}