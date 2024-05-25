import { Center, SimpleGrid } from "@chakra-ui/react";
import { CardBenefit } from "./CardBenefit";

export const GridCards = (props) => {
  const { list } = props;

  return (
    <div>
      <Center>
        <SimpleGrid spacing={4} templateColumns="repeat(3, 1fr)">
          {list.map((card, index) => {
            return (
              <CardBenefit
                key={index}
                title={card.name}
                description={card.description}
                imageURL={card.image}
                points={card.value}
              />
            );
          })}
        </SimpleGrid>
      </Center>
    </div>
  );
};
