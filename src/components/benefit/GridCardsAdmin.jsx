import { Center, SimpleGrid } from "@chakra-ui/react";
import { CreateBenefit } from "./CreateBenefit";
import { CardBenefitAdmin } from "./CardBenefitAdmin";

export const GridCardsAdmin = (props) => {
  const { list } = props;
  
  return (
    <div>
      <Center>
        <SimpleGrid spacing={4} templateColumns="repeat(3, 1fr)">
          <CreateBenefit />
          {list.map((card, index) => {
            return (
              <CardBenefitAdmin
                key={index}
                id={card.id}
                title={card.name}
                description={card.description}
                imageURL={card.imageURL}
                points={card.value}
              />
            );
          })}
        </SimpleGrid>
      </Center>
    </div>
  );
};
