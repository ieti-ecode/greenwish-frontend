import { Box, Heading } from "@chakra-ui/react";
import { GridCardsAdmin } from "../../components/benefit/GridCardsAdmin";
import { useState, useEffect } from "react";
import { request } from "../../api/AxiosHandler";
import  Header from "../../components/welcome/HeaderWelcome";

export default function BenefitsUser() {

  const [list, setlist] = useState([]);
  useEffect(() => {
    request("GET", "/benefits")
      .then((response) => {
        setlist(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Box m={3}>
      <Header />
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
        ¿Qué elemento quieres modificar?
      </Heading>
      <GridCardsAdmin list={list} />
    </Box>
  );
}
