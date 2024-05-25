import React, { useState, useEffect } from 'react';
import { Box, VStack, Input, Button, Text, Flex } from '@chakra-ui/react';
import MaterialCard from '../components/MaterialCard';
import { getMaterials, createMaterial, updateMaterial, updateImageMaterial, deleteMaterial, getMaterial } from "../api/AxiosHandler";

const AdminPage = () => {
  const [materials, setMaterials] = useState([]);
  const [form, setForm] = useState({ name: '', description: '', kiloValue: '', image: '' });
  const [editingMaterial, setEditingMaterial] = useState(null);

  useEffect(() => {
    const fetchMaterials = async () => {
      const response = await getMaterials();
      setMaterials(response.data);
    };
    fetchMaterials();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, image: file });
  };

  const handleSubmit = async () => {
    let newMaterial;
    if (editingMaterial) {
      await updateMaterial(editingMaterial.id, form);
      if (form.image) {
        const formData = new FormData();
        formData.append('image', form.image);
        await updateImageMaterial(editingMaterial.id, formData);
      }
      newMaterial = await getMaterial(editingMaterial.id);
      setMaterials(materials.map(m => m.id === newMaterial.data.id ? newMaterial.data : m));
      setEditingMaterial(null);
    } else {
      const response = await createMaterial(form);
      if (form.image) {
        const formData = new FormData();
        formData.append('image', form.image);
        await updateImageMaterial(response.data.id, formData);
      }
      newMaterial = await getMaterial(response.data.id);
      setMaterials([...materials, newMaterial.data]);
    }

    setForm({ name: '', description: '', kiloValue: '', image: '' });
  };

  const handleEdit = (material) => {
    setForm({
      id: material.id,
      name: material.name,
      description: material.description,
      kiloValue: material.kiloValue,
      image: ''
    });
    setEditingMaterial(material);
  };

  const handleDelete = async (id) => {
    await deleteMaterial(id);
    setMaterials(materials.filter(m => m.id !== id));
  };

  return (
    <Flex direction="column" align="center">
      <Text fontSize="3xl" fontWeight="bold" mb="4">Administración de Materiales</Text>
      <Box p="4" bg="white" borderRadius="md" boxShadow="md" mb="4" width="90%" maxWidth="500px">
        <Text fontSize="2xl" mb="4">{editingMaterial ? 'Editar Material' : 'Agregar Material'}</Text>
        <VStack spacing="4" align="stretch">
          <Input
            placeholder="Nombre"
            name="name"
            value={form.name}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Descripción"
            name="description"
            value={form.description}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Valor por Kilo"
            name="kiloValue"
            value={form.kiloValue}
            onChange={handleInputChange}
          />
          <Input
            type="file"
            name="image"
            onChange={handleFileChange}
          />
          <Button colorScheme="green" onClick={handleSubmit}>
            {editingMaterial ? 'Actualizar' : 'Agregar'}
          </Button>
        </VStack>
      </Box>
      <Flex wrap="wrap" justify="center" gap="4" width="100%">
        {materials.map(material => (
          <MaterialCard
            key={material.id}
            material={material}
            onEdit={() => handleEdit(material)}
            onDelete={() => handleDelete(material.id)}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default AdminPage;
