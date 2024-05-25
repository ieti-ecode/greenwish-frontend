import React, { useEffect, useState } from 'react';
import { request } from "../../api/AxiosHandler";
import { Company } from './Company';
import { Center, SimpleGrid } from '@chakra-ui/react'

const CompaniesList = (props) => {
  const { button } = props;
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
  
  const handleDelete = (index) => {
    const id = companies[index].id;
    request("DELETE", `/companies/${id}`)
      .then((response) => {
        const newCompanies = companies.filter((company, i) => i !== index);
        setCompanies(newCompanies);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <Center>
        <SimpleGrid spacing={4} templateColumns='repeat(4, 1fr)' mx={5}>
          {companies.map((company, index) => (
            <Company key={company.id} image={company.image && company.image.data ? `data:image/png;base64, ${company.image.data}` : null} name={company.name} description={company.description} number={company.phoneNumber} address={company.address} button={button} onDelete={() => handleDelete(index)} />
          ))}
        </SimpleGrid>
      </Center>
    </div>

  );
}

export default CompaniesList;