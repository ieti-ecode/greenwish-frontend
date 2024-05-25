import React, { useEffect, useState } from 'react';
import { request } from "../../api/AxiosHandler";
import { Company } from './Company';
import { Center, Heading, SimpleGrid } from '@chakra-ui/react'

const CompaniesList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    request("GET", "/companies")
      .then((response) => {
        setCompanies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
    , []);

  return (
    <div>
      <Center>
        <SimpleGrid spacing={4} templateColumns='repeat(3, 1fr)' mx={5}>
          {companies.map((company) => (
            console.log(company),
            <Company key={company.id} image={company.image} name={company.name} description={company.description} number={company.phoneNumber} address={company.address} />
          ))}
        </SimpleGrid>
      </Center>
    </div>

  );
}

export default CompaniesList;