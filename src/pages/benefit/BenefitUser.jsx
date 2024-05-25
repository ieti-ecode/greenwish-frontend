import { Box, Heading, Text } from "@chakra-ui/react";
import { GridCards } from "../../components/benefit/GridCards";
import { request, getIdUser } from "../../api/AxiosHandler";
import { useState, useEffect } from "react";

export default function BenefitsUser() {
  const [list, setlist] = useState([]);
  const [userPoints, setUserPoints] = useState();

  useEffect(() => {
    request("GET", "/benefits")
      .then((response) => {
        setlist(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      
      request("GET", `/users/${getIdUser()}`).then((response) => {
        setUserPoints(response.data.points);        
      });
  }, []);
  return (
    <Box m={3}>
      <Heading
        as="h2"
        size="xl"
        mb="8"
        fontSize="4xl"
        ml="2"
        bgGradient="linear(to-l, green.300, green.500)"
        bgClip="text"
        textAlign="center"
      >
        Elige tu recompensa
      </Heading>
      <Text fontSize="2xl" fontWeight="bold" mb={5}>Tus puntos actuales son: {userPoints}</Text>
      <GridCards list={list} />
    </Box>
  );
}
