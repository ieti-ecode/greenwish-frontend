import React from 'react';
import MaterialCard from '../components/MaterialCard';
import './ClientPage.css';

const materials = [
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

const ClientPage = () => {
  return (
    <div className="client-page">
      <h1>Materiales Disponibles para Reciclar</h1>
      <div className="materials-grid">
        {materials.map((material) => (
          <MaterialCard key={material.id} material={material} />
        ))}
      </div>
    </div>
  );
};

export default ClientPage;
