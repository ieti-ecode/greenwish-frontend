import React from 'react';
import './MaterialCard.css';

const MaterialCard = ({ material, onEdit, onDelete }) => {
  return (
    <div className="card">
      <img src={material.image} alt={material.name} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{material.name}</h2>
        <p className="card-description">{material.description}</p>
        <p className="card-price">{material.valuePerKilo} /kg</p>
        {onEdit && onDelete && (
          <>
            <button className="edit-button" onClick={() => onEdit(material)}>Editar</button>
            <button className="delete-button" onClick={() => onDelete(material.id)}>Eliminar</button>
          </>
        )}
      </div>
    </div>
  );
};

export default MaterialCard;
