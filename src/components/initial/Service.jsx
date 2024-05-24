import { Card, CardHeader, CardBody, Heading, Text } from '@chakra-ui/react'

export const Service = (props) => {

    const { title, description } = props

    return (
        <Card borderRadius="lg" overflow="hidden" boxShadow="lg" background="gray.50">
            <CardHeader>
                <Heading size='md'> {title} </Heading>
            </CardHeader>
            <CardBody>
                <Text>{description}</Text>
            </CardBody>
        </Card>
    )
}