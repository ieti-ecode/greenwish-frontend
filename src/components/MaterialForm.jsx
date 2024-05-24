import React, { useState, useEffect } from 'react';
import './MaterialForm.css';

const MaterialForm = ({ currentMaterial, onSave }) => {
  const [material, setMaterial] = useState({
    name: '',
    description: '',
    valuePerKilo: '',
    image: ''
  });

  useEffect(() => {
    if (currentMaterial) {
      setMaterial(currentMaterial);
    }
  }, [currentMaterial]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMaterial({ ...material, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(material);
    setMaterial({ name: '', description: '', valuePerKilo: '', image: '' });
  };

  return (
    <form className="material-form" onSubmit={handleSubmit}>
      <h2>Agregar Material</h2>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={material.name}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Descripción"
        value={material.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="valuePerKilo"
        placeholder="Valor por Kilo"
        value={material.valuePerKilo}
        onChange={handleChange}
      />
      <input
        type="text"
        name="image"
        placeholder="URL de la Imagen"
        value={material.image}
        onChange={handleChange}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default MaterialForm;
