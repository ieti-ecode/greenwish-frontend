import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Image,
  Stack,
  CardFooter,
} from "@chakra-ui/react";
import { CreateBenefitPopup } from "./CreateBenefitPopup";
import lapiz from "../../assets/lapiz_nuevoElemento.jpg"
export const CreateBenefit = () => {

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      borderRadius="3xl"
      overflow="hidden"
      boxShadow="lg"
      background="gray.50"
      variant="outline"
      maxH={{ base: "100%", sm: "300px" }}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "180px" }}
        alt="lapiz"
        src={lapiz}
      />
      <CardBody>
        <CreateBenefitPopup/>
      </CardBody>
    </Card>
  );
};
