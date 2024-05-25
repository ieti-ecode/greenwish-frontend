import { Card, CardBody, Heading, Text, Image, Stack, CardFooter, Divider } from '@chakra-ui/react'

export const Company = (props) => {

    const { image, name, description, number, address } = props

    return (
        <Card maxW='sm' shadow='xl'>
            <CardBody>
                <Image src={image} borderRadius='lg' />
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
                    <Heading size='sm'>Puntos de Recolección</Heading>
                    <Text>{address}</Text>
                </Stack>
            </CardFooter>
        </Card>
    )
}