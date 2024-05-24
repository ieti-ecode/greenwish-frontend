import React, { useState } from 'react';
import MaterialCard from '../components/MaterialCard';
import MaterialForm from '../components/MaterialForm';
import './AdminPage.css';

const initialMaterials = [
  { id: 1, name: 'Plástico', description: 'Botellas y envases de plástico', valuePerKilo: 500, image: '/images/plastico.jpg' },
  { id: 2, name: 'Papel', description: 'Papel de oficina y periódicos', valuePerKilo: 200, image: '/images/papel.jpg' },
  { id: 3, name: 'Plástico', description: 'Botellas y envases de plástico', valuePerKilo: 500, image: '/images/plastico.jpg' },
  { id: 4, name: 'Papel', description: 'Papel de oficina y periódicos', valuePerKilo: 200, image: '/images/papel.jpg' },
  { id: 5, name: 'Plástico', description: 'Botellas y envases de plástico', valuePerKilo: 500, image: '/images/plastico.jpg' },
  { id: 6, name: 'Papel', description: 'Papel de oficina y periódicos', valuePerKilo: 200, image: '/images/papel.jpg' },
  { id: 7, name: 'Plástico', description: 'Botellas y envases de plástico', valuePerKilo: 500, image: '/images/plastico.jpg' },
  { id: 8, name: 'Papel', description: 'Papel de oficina y periódicos', valuePerKilo: 200, image: '/images/papel.jpg' },
  { id: 9, name: 'Plástico', description: 'Botellas y envases de plástico', valuePerKilo: 500, image: '/images/plastico.jpg' },
  { id: 10, name: 'Papel', description: 'Papel de oficina y periódicos', valuePerKilo: 200, image: '/images/papel.jpg' },
  { id: 11, name: 'Plástico', description: 'Botellas y envases de plástico', valuePerKilo: 500, image: '/images/plastico.jpg' },
  { id: 12, name: 'Papel', description: 'Papel de oficina y periódicos', valuePerKilo: 200, image: '/images/papel.jpg' },
  { id: 13, name: 'Plástico', description: 'Botellas y envases de plástico', valuePerKilo: 500, image: '/images/plastico.jpg' },
  { id: 14, name: 'Papel', description: 'Papel de oficina y periódicos', valuePerKilo: 200, image: '/images/papel.jpg' },
];

const AdminPage = () => {
  const [materials, setMaterials] = useState(initialMaterials);
  const [currentMaterial, setCurrentMaterial] = useState(null);

  const handleSave = (material) => {
    if (material.id) {
      setMaterials(materials.map(m => (m.id === material.id ? material : m)));
    } else {
      material.id = materials.length + 1;
      setMaterials([...materials, material]);
    }
    setCurrentMaterial(null);
  };

  const handleEdit = (material) => {
    setCurrentMaterial(material);
  };

  const handleDelete = (id) => {
    setMaterials(materials.filter(material => material.id !== id));
  };

  return (
    <div className="admin-page">
      <h1>Administración de Materiales</h1>
      <MaterialForm currentMaterial={currentMaterial} onSave={handleSave} />
      <div className="materials-grid">
        {materials.map((material) => (
          <MaterialCard key={material.id} material={material} onEdit={handleEdit} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
