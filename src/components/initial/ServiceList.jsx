import { Center, SimpleGrid } from '@chakra-ui/react';
import { Service } from './Service';

export const ServiceList = (props) => {
    const { list } = props

    return (
        <div>
            <Center>
                <SimpleGrid spacing={4} templateColumns='repeat(3, 1fr)' mx={5}>
                    {list.map((service, index) => {
                        return <Service key={index} title={service.title} description={service.description} />
                    })}
                </SimpleGrid>
            </Center>
        </div>
    );
};