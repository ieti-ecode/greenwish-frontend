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
import { ClaimBenefitPopup } from "./ClaimBenefitPopup";

export const CardBenefit = (props) => {
  const { title, description, imageURL, points } = props;
  const imagebase64 =
    imageURL && imageURL.data ? "data:image/png;base64," + imageURL.data : "";
  const formatNumberWithDots = (value) => {
    return Number(value).toLocaleString("es-ES");
  };

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
        src={imagebase64}
      />
      <Stack spacing={0} p={0}>
        <CardHeader pb={1}>
          <Heading size="md"> {title} </Heading>
        </CardHeader>
        <CardBody mt={0} pt={0} pb={2}>
          <Text fontSize="sm">{description}</Text>
          <Text fontSize="sm" fontWeight="bold">
            Puntos Requeridos: {formatNumberWithDots(points)}
          </Text>
        </CardBody>
        <CardFooter pt={0} justifyContent="center">
          <ClaimBenefitPopup
            title={title}
            description={description}
            points={points}
          />
        </CardFooter>
      </Stack>
    </Card>
  );
};
