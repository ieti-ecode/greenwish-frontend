import React, { useState, useEffect } from 'react';
import { Text, Flex } from '@chakra-ui/react';
import MaterialCard from '../../components/material/MaterialCard';
import SelectedMaterials from '../../components/material/SelectedMaterials';
import { getMaterials } from "../../api/AxiosHandler";
import  Header from "../../components/welcome/HeaderWelcomeClient";

const ClientPage = () => {
  const [materials, setMaterials] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  useEffect(() => {
    const fetchMaterials = async () => {
      const response = await getMaterials();
      setMaterials(response.data);
    };
    fetchMaterials();
  }, []);

  const handleAdd = (material) => {
    const updatedMaterials = [...selectedMaterials];
    const materialIndex = updatedMaterials.findIndex(m => m.id === material.id);
    if (materialIndex > -1) {
      updatedMaterials[materialIndex].quantity += 1;
    } else {
      updatedMaterials.push({ ...material, quantity: 1 });
    }
    setSelectedMaterials(updatedMaterials);
  };

  const handleQuantityChange = (materialId, quantity) => {
    setSelectedMaterials(selectedMaterials.map(m =>
      m.id === materialId ? { ...m, quantity } : m
    ));
  };

  const handleRemove = (materialId) => {
    setSelectedMaterials(selectedMaterials.filter(m => m.id !== materialId));
  };

  return (
    <Flex direction="column" align="center" width="100vw" height="100vh">
      <Header />
      <Text fontSize="3xl" fontWeight="bold" mb="4">Materiales Disponibles</Text>
      <SelectedMaterials
        selectedMaterials={selectedMaterials}
        onQuantityChange={handleQuantityChange}
        onRemove={handleRemove}
      />
      <Flex wrap="wrap" justify="center" gap="4">
        {materials.map(material => (
          <MaterialCard key={material.id} material={material} onAdd={handleAdd} />
        ))}
      </Flex>
    </Flex>
  );
};

export default ClientPage;
