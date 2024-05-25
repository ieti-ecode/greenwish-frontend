import { Box, Heading } from "@chakra-ui/react";
import { GridCards } from "../../components/benefit/GridCards";
import { request, setAuthToken } from "../../api/AxiosHandler";
import { useState, useEffect } from "react";

export default function BenefitsUser() {
  const benefitsList = [
    {
      title: "Bono Netflix",
      description:
        "Es un bono por el valor de $45.000 para la plataforma de Streaming Netflix",
      imageURL:
        "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png",
      points: 35000,
    },
    {
      title: "Bono Spotify",
      description:
        "Es un bono por el valor de $45.000 para la plataforma de Spotify",
      imageURL:
        "https://e7.pngegg.com/pngimages/4/438/png-clipart-spotify-logo-spotify-mobile-app-computer-icons-app-store-music-free-icon-spotify-miscellaneous-logo.png",
      points: 10000,
    },
    {
      title: "Pop Corn Mediano KFC",
      description: "Bono redimible por un pop corn mediano de KFC",
      imageURL:
        "https://tubono.com/wp-content/uploads/2017/10/kfc_kentucky.png",
      points: 42000,
    },
    {
      title: "Helado Gourmet Popsy",
      description: "Bono redimible por cono de Helado Gourmet de Popsy",
      imageURL: "https://tubono.com/wp-content/uploads/2017/10/Popsy_gift.png",
      points: 35000,
    },
    {
      title: "Bono BOSI",
      description: "Es un bono por el valor de $145.000 para redimir en BOSI",
      imageURL:
        "https://tubono.com/wp-content/uploads/2024/03/bosi_bono_regalo.png",
      points: 400000,
    },
  ];
  const [list, setlist] = useState([]);
  useEffect(() => {
    request("GET", "/benefits")
      .then((response) => {
        setlist(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
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
      <GridCards list={list} />
    </Box>
  );
}
